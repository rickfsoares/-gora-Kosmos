class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :apelido, :saldo, :premium
end
