# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Topic.create([
  {nome:"blockchain"},
  {nome: "earnings"},
  {nome: "ipo"},
  {nome: "mergers_and_acquisitions"},
  {nome: "financial_markets"},
  {nome: "economy_fiscal"},
  {nome: "economy_monetary"},
  {nome: "economy_macro"},
  {nome: "energy_transportation"},
  {nome: "finance"},
  {nome: "life_sciences"},
  {nome: "manufacturing"},
  {nome: "real_estate"},
  {nome: "retail_wholesale"},
  {nome: "technology"}
])
