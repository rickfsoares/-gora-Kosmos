# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Stock.create([
     {nome: 'IBM', descricao: 'IBM', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'NVDA', descricao: 'NVDA', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'TSLA', descricao: 'TSLA', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'AAPL', descricao: 'AAPL', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'META', descricao: 'META', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'AMD', descricao: 'AMD', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'MSFT', descricao: 'MSFT', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'AMZN', descricao: 'AMZN', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'AVGO', descricao: 'AVGO', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'UNH', descricao: 'UNH', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'SMCI', descricao: 'SMCI', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'INTC', descricao: 'INTC', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'LLY', descricao: 'LLY', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
      {nome: 'MU', descricao: 'MU', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'GOOG', descricao: 'GOOG', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'QCOM', descricao: 'QCOM', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'BAC', descricao: 'BAC', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'NSTR', descricao: 'NSTR', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'NFLX', descricao: 'NFLX', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'JPM', descricao: 'JPM', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'DELL', descricao: 'DELL', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'COIN', descricao: 'COIN', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'UBER', descricao: 'UBER', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'HD', descricao: 'HD', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'ORCL', descricao: 'ORCL', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price: 0.00},
     {nome: 'MCD', descricao: 'MCD', cotacao: 0.00, volume: 0, opening_price: 0.00, closing_price:0.00}

])
