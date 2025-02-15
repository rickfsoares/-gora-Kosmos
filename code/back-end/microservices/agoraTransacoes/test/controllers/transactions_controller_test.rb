require "test_helper"

class TransactionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transaction = transactions(:one)
  end

  test "should get index" do
    get transactions_url, as: :json
    assert_response :success
  end

  test "should create transaction" do
    assert_difference("Transaction.count") do
      post transactions_url, params: { transaction: { idMercadoPago: @transaction.idMercadoPago, qrCode: @transaction.qrCode, qrCodeBase64: @transaction.qrCodeBase64, status: @transaction.status, valor: @transaction.valor } }, as: :json
    end

    assert_response :created
  end

  test "should show transaction" do
    get transaction_url(@transaction), as: :json
    assert_response :success
  end

  test "should update transaction" do
    patch transaction_url(@transaction), params: { transaction: { idMercadoPago: @transaction.idMercadoPago, qrCode: @transaction.qrCode, qrCodeBase64: @transaction.qrCodeBase64, status: @transaction.status, valor: @transaction.valor } }, as: :json
    assert_response :success
  end

  test "should destroy transaction" do
    assert_difference("Transaction.count", -1) do
      delete transaction_url(@transaction), as: :json
    end

    assert_response :no_content
  end
end
