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