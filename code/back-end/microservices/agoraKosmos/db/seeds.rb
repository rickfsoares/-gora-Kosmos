# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

if Stock.count == 0
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
end

if Level.count == 0
     level = Level.create( {nivel: 1})
     level.missions.create([
          {nome: 'Missão 1', descricao: 'Compre 2 ativos', xp: 10, quantidade_ativos: 2},
          {nome: 'Missão 2', descricao: 'Compre 4 ativos', xp: 20, quantidade_ativos: 4},
          {nome: 'Missão 3', descricao: 'Compre 6 ativos', xp: 30, quantidade_ativos: 6},
     ])
     
     level = Level.create( {nivel: 2})
     level.missions.create([
          {nome: 'Missão 4', descricao: 'Compre 8 ativos', xp: 40, quantidade_ativos: 8},
          {nome: 'Missão 5', descricao: 'Compre 10 ativos', xp: 50, quantidade_ativos: 10},
          {nome: 'Missão 6', descricao: 'Compre 12 ativos', xp: 60, quantidade_ativos: 12},
     ])
     
     level = Level.create( {nivel: 3})
     level.missions.create([
          {nome: 'Missão 7', descricao: 'Compre 14 ativos', xp: 70, quantidade_ativos: 14},
          {nome: 'Missão 8', descricao: 'Compre 16 ativos', xp: 80, quantidade_ativos: 16},
          {nome: 'Missão 9', descricao: 'Compre 18 ativos', xp: 90, quantidade_ativos: 18},
     ])
end

if User.count > 0
     User.all.each do |user|
          user.update({xp: 0, level: Level.where(nivel: 1).first, investimentos: user.investments.count})
          user.pass_level_up
     end
end