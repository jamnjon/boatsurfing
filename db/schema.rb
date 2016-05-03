# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160502212639) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boating_requests", force: :cascade do |t|
    t.string   "status",            default: "pending"
    t.integer  "sending_user_id",                       null: false
    t.integer  "receiving_user_id",                     null: false
    t.integer  "posting_id",                            null: false
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
  end

  add_index "boating_requests", ["posting_id"], name: "index_boating_requests_on_posting_id", using: :btree
  add_index "boating_requests", ["receiving_user_id"], name: "index_boating_requests_on_receiving_user_id", using: :btree
  add_index "boating_requests", ["sending_user_id"], name: "index_boating_requests_on_sending_user_id", using: :btree

  create_table "lakes", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
  end

  create_table "postings", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "boat_type",    null: false
    t.string   "activity",     null: false
    t.integer  "lake_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "posting_type"
  end

  add_index "postings", ["lake_id"], name: "index_postings_on_lake_id", using: :btree
  add_index "postings", ["user_id"], name: "index_postings_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                      null: false
    t.string   "password_digest",               null: false
    t.string   "session_token",                 null: false
    t.float    "average_rating",  default: 0.0
    t.integer  "num_ratings",     default: 0
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

end
