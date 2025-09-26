# Configure the Azure Provider
provider "azurerm" {
  features {}
}

# Define the resource group for your project
resource "azurerm_resource_group" "rg" {
  name     = "glowupdev4prod"
  location = "East US 2" # We will use this region for all resources
}

resource "azurerm_service_plan" "app_plan" {
  name                = "asp-glowupdev4prod"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "frontend_app" {
  name                = "app-glowupdev4prod-frontend"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.app_plan.id

  site_config {
    application_stack {
      node_version = "20-lts"
    }
  }
}

resource "azurerm_linux_web_app" "backend_app" {
  name                = "app-glowupdev4prod-backend"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.app_plan.id

  site_config {
    application_stack {
      python_version = "3.10"
    }
  }

  identity {
    type = "SystemAssigned"
  }
}

################################################################################
# New resources for Databases and Secrets Management (Phase 2)
################################################################################

# Data source to get the current client's tenant configuration
data "azurerm_client_config" "current" {}

# Variable for PostgreSQL admin password
variable "postgresql_admin_password" {
  type        = string
  description = "The password for the PostgreSQL flexible server administrator."
  sensitive   = true # Mark as sensitive to prevent it from being shown in the console output
}

# Azure Key Vault to store secrets
resource "azurerm_key_vault" "kv" {
  name                       = "kv-glowupdev4prod"
  location                   = azurerm_resource_group.rg.location
  resource_group_name        = azurerm_resource_group.rg.name
  tenant_id                  = data.azurerm_client_config.current.tenant_id
  sku_name                   = "standard"

  # Access policy for the Backend App Service's Managed Identity
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = azurerm_linux_web_app.backend_app.identity[0].principal_id

    secret_permissions = [
      "Get",
      "List"
    ]
  }

  # New temeporary access policy for your user account
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id
    secret_permissions = [
      "Set",
      "Get",
      "List",
      "Delete"
    ]
  }
}

# The time_sleep resource to pause for Key Vault policy propagation.
resource "time_sleep" "wait_for_key_vault_policy" {
  create_duration = "60s"
}

# Azure PostgreSQL Flexible Server for user data
resource "azurerm_postgresql_flexible_server" "psql_server" {
  name                          = "psql-glowupdev4prod"
  resource_group_name           = azurerm_resource_group.rg.name
  location                      = azurerm_resource_group.rg.location
  zone                          = "1"
  version                       = "16"
  sku_name                      = "B_Standard_B1ms"
  administrator_login           = "glowupadmin"
  administrator_password        = var.postgresql_admin_password
  public_network_access_enabled = false
}

# Firewall rule to allow your IP for administrative access
resource "azurerm_postgresql_flexible_server_firewall_rule" "allow_my_ip" {
  name             = "AllowMyIP"
  server_id        = azurerm_postgresql_flexible_server.psql_server.id
  start_ip_address = "73.55.177.31"
  end_ip_address   = "73.55.177.31"
}

# Key Vault Secret to store the PostgreSQL connection string
resource "azurerm_key_vault_secret" "db_connection_string" {
  # Add depends_on to ensure this resource waits for the time_sleep to finish
  depends_on = [time_sleep.wait_for_key_vault_policy]

  name         = "postgresql-connection-string"
  value        = "postgresql://glowupadmin:${var.postgresql_admin_password}@${azurerm_postgresql_flexible_server.psql_server.fqdn}:5432/postgres"
  key_vault_id = azurerm_key_vault.kv.id
}