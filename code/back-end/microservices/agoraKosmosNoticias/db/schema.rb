# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_10_01_205209) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "investments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "stock_id", null: false
    t.integer "quantidade"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_investments_on_stock_id"
    t.index ["user_id"], name: "index_investments_on_user_id"
  end

  create_table "levels", force: :cascade do |t|
    t.integer "nivel"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "missions", force: :cascade do |t|
    t.string "nome"
    t.string "descricao"
    t.integer "xp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "level_id", null: false
    t.integer "quantidade_ativos"
    t.index ["level_id"], name: "index_missions_on_level_id"
  end

  create_table "news", force: :cascade do |t|
    t.string "title"
    t.string "summary"
    t.string "url"
    t.string "bannerImage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "topic_id", null: false
    t.index ["topic_id"], name: "index_news_on_topic_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "nome"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "phones", force: :cascade do |t|
    t.string "numero"
    t.bigint "person_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_phones_on_person_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "nome"
    t.string "descricao"
    t.decimal "cotacao"
    t.integer "volume"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "opening_price"
    t.decimal "closing_price"
  end

  create_table "topics", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.bigint "idMercadoPago"
    t.string "status"
    t.decimal "valor"
    t.string "qrCodeBase64"
    t.string "qrCode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "dataCriacao", precision: nil
    t.integer "id_usuario"
  end

  create_table "user_missions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "mission_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mission_id"], name: "index_user_missions_on_mission_id"
    t.index ["user_id"], name: "index_user_missions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "endereco"
    t.string "uf"
    t.string "cidade"
    t.string "apelido"
    t.string "estadoCivil"
    t.string "profissao"
    t.decimal "renda"
    t.string "jti"
    t.decimal "saldo"
    t.string "cpf"
    t.string "telefone"
    t.string "nome"
    t.string "cep"
    t.boolean "premium"
    t.integer "xp"
    t.bigint "level_id", null: false
    t.integer "investimentos"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti"
    t.index ["level_id"], name: "index_users_on_level_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "investments", "stocks"
  add_foreign_key "investments", "users"
  add_foreign_key "missions", "levels"
  add_foreign_key "news", "topics"
  add_foreign_key "phones", "people"
  add_foreign_key "user_missions", "missions"
  add_foreign_key "user_missions", "users"
  add_foreign_key "users", "levels"
end
