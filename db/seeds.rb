# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "I_Should_Hire_Jon", password: "password")
User.create(username: "Jon", password: "123123")
User.create(username: "GoSharks", password: "PredsSuck")
Lake.create(name: "Lake Tahoe")
Lake.create(name: "Delta")
Lake.create(name: "Lake Berryessa")
Lake.create(name: "Clear Lake")
Lake.create(name: "Bass Lake")
Lake.create(name: "Echo Lake")
Lake.create(name: "Lake Havasu")
Lake.create(name: "Lake Shasta")

Posting.create(
  user_id: 1, start_time: DateTime.new(2016,5,15,8,0,0),
  end_time: DateTime.new(2016,5,15,12,0,0), boat_type: "wakeboard",
  lake_id: 2, activity: "wakeboarding", posting_type: "host")

Posting.create(
  user_id: 3, start_time: DateTime.new(2016,5,20,12,0,0),
  end_time: DateTime.new(2016,5,20,18,0,0), boat_type: "waterski",
  lake_id: 8, activity: "waterskiing", posting_type: "host")

Posting.create(
  user_id: 2, start_time: DateTime.new(2016,5,7,8,0,0),
  end_time: DateTime.new(2016,5,7,15,0,0), boat_type: "wakeboard",
  lake_id: 7, activity: "wakeboarding", posting_type: "guest")
