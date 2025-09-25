terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  # This is the remote backend configuration
  backend "azurerm" {
    resource_group_name  = "terraform-state"
    storage_account_name = "tfstate4glowupdev"
    container_name       = "tfstate"
    key                  = "learning-platform.tfstate"
  }
}