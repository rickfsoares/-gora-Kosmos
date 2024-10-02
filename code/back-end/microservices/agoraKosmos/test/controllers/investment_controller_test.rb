require "test_helper"
require 'devise/jwt/test_helpers'

class InvestmentControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  # setup do
  #   @user = users(:ricardo) # Assuming you have a fixture for users
  #   @stock = stocks(:IBM) # Assuming you have a fixture for stocks
  #   @user.update(saldo: 1000) # Ensure the user has enough saldo for the test
  # end

  # test "should create investment" do
  #   @user = users(:ricardo)  # Usando o fixture 'ricardo', por exemplo
  #   headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json', "HTTP_JWT_AUD" => "agora-kosmos" }
  #   auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, @user)

  #   post api_investments_url, params: { stock_id: @stock.id, quantity: 2 }, headers: auth_headers, as: :json
  #   assert_response :success
  #   json_response = JSON.parse(response.body)
  #   assert_equal "Compra bem-sucedida", json_response['message']
  # end

  # test "should not create investment with insufficient saldo" do
  #   @user.update(saldo: 0) # Ensure the user has insufficient saldo for the test

  #   post api_investments_url, params: { stock_id: @stock.id, quantity: 1 }, headers: @headers, as: :json

  #   assert_response :bad_request
  #   json_response = JSON.parse(response.body)
  #   assert_equal "Saldo insuficiente", json_response['message']
  # end
end
