provider "aws" {
  region = var.region
}
terraform {
  backend "s3" {
    bucket         = "project7-terraform-state"
    key            = "project7/terraform.tfstate"
    region         = "ap-south-1"
    encrypt        = true
    use_lockfile = true
  }
}
