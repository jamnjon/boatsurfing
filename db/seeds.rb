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
User.create(username: "Brent_Burns", password: "Chewbacca")
User.create(username: "Martin_Jones", password: "WeWantTheCup")
User.create(username: "Joe_Thornton", password: "jumbojoe")
User.create(username: "Logan_Couture", password: "cooch39")
User.create(username: "Joonas_Donskoi", password: "Donkey")
User.create(username: "Tomas_Hertl", password: "TMNH48")
User.create(username: "Melker_Karlsson", password: "Melkman")
User.create(username: "Patrick_Marleau", password: "gutless")
User.create(username: "Matt_Nieto", password: "torpedo")
User.create(username: "Joe_Pavelski", password: "pokey8")
User.create(username: "Nick_Spaling", password: "sapling")
User.create(username: "Chris_Tierney", password: "tierney")
User.create(username: "Joel_Ward", password: "Wardo42")
User.create(username: "Dainius_Zubrus", password: "Zubeezubeezoob")
User.create(username: "Justin_Braun", password: "Brauny")
User.create(username: "Dylan_Demelo", password: "goSharks")
User.create(username: "Paul_Martin", password: "Marty7")
User.create(username: "Roman_Polak", password: "Polak46")
User.create(username: "Matt_Tennyson", password: "ReavesCantHurtMe")
User.create(username: "Marc-Edouard_Vlasic", password: "Pickles")
User.create(username: "James_Reimer", password: "OptimusReim")
Lake.create(name: "Lake Almanor")
Lake.create(name: "Lake Berryessa")
Lake.create(name: "Lake Camanche")
Lake.create(name: "Clear Lake")
Lake.create(name: "Donner Lake")
Lake.create(name: "Don Pedro Reservoir")
Lake.create(name: "Eagle Lake")
Lake.create(name: "Fallen Leaf Lake")
Lake.create(name: "Folsom Lake")
Lake.create(name: "Lake McClure")
Lake.create(name: "New Bullards Bar Reservoir")
Lake.create(name: "New Hogan Lake")
Lake.create(name: "New Melones Lake")
Lake.create(name: "Lake Oroville")
Lake.create(name: "Pinecrest Lake")
Lake.create(name: "Lake Shasta")
Lake.create(name: "Lake Sonoma")
Lake.create(name: "Stampede Reservoir")
Lake.create(name: "Lake Tahoe")
Lake.create(name: "Trinity Lake")
Lake.create(name: "Bass Lake")
Lake.create(name: "Lake Edison")
Lake.create(name: "Florence Lake")
Lake.create(name: "Huntington Lake")
Lake.create(name: "Isabella Lake")
Lake.create(name: "Millerton Lake")
Lake.create(name: "Lake Nacimiento")
Lake.create(name: "Pine Flat Lake")
Lake.create(name: "Lake San Antonio")
Lake.create(name: "Santa Margarita Lake")
Lake.create(name: "Shaver Lake")
Lake.create(name: "Big Bear Lake")
Lake.create(name: "Lake Cachuma")
Lake.create(name: "Lake Casitas")
Lake.create(name: "Castaic Lake")
Lake.create(name: "Diamond Valley Lake")
Lake.create(name: "El Capitan Reservoir")
Lake.create(name: "Lake Havasu")
Lake.create(name: "Lake Perris")
Lake.create(name: "Lake Piru")
Lake.create(name: "Silverwood Lake")
Lake.create(name: "June Lake")
Lake.create(name: "Mammoth Pool Reservoir")
Lake.create(name: "Mono Lake")

activities = ["wakeboarding", "wakesurfing", "kneeboarding", "tubing", "waterskiing"]
boat_types = ["wakeboard", "waterski"]
(1..44).each do |lake|
  (rand(5)+2).times do
    user = rand(24)+1
    month = rand(7)+6
    day=rand(28)+1
    start_hour=rand(8)+5
    end_hour= start_hour + rand(9)+2
    boat = boat_types[rand(boat_types.length)]
    if (boat=="wakeboard")
      sport=activities[rand(activities.length - 1)]
    else
      sport="waterskiing"
    end
    Posting.create(user_id: user,
    start_time: DateTime.new(2016, month, day, start_hour, 0, 0), end_time:
    DateTime.new(2016, month, day, end_hour, 0, 0), boat_type: boat,
    lake_id: lake, activity: sport, posting_type: "Hosts")
  end
  (rand(5)+2).times do
    user = rand(24)+1
    month = rand(7)+6
    day=rand(28)+1
    start_hour=rand(8)+5
    end_hour= start_hour + rand(9)+2
    boat = boat_types[rand(boat_types.length)]
    if (boat=="wakeboard")
      sport=activities[rand(activities.length - 1)]
    else
      sport="waterskiing"
    end
    Posting.create(user_id: user,
    start_time: DateTime.new(2016, month, day, start_hour, 0, 0), end_time:
    DateTime.new(2016, month, day, end_hour, 0, 0), boat_type: boat,
    lake_id: lake, activity: sport, posting_type: "Guests")
  end
end
