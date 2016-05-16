# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Guest", password: "password")
User.create(username: "Jon", password: "123123")
User.create(username: "GoSharks", password: "PredsSuck")
User.create(username: "Brent Burns", password: "Chewbacca", profile_pic_url: "data:image/jpeg;base64,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")
User.create(username: "Martin Jones", password: "WeWantTheCup", profile_pic_url: "http://www.readingeagle.com/storyimage/RE/20160127/AP/301279802/EP/1/3/EP-301279802.jpg&q=80&MaxW=550&MaxH=400&RCRadius=5")
User.create(username: "Joe Thornton", password: "jumbojoe", profile_pic_url: "https://s-media-cache-ak0.pinimg.com/736x/bb/08/75/bb08758607a9d9480db9fdac8345bb30.jpg")
User.create(username: "Logan Couture", password: "cooch39", profile_pic_url: "http://extras.mnginteractive.com/live/media/site568/2014/1006/20141006__sharkscouture~1.JPG")
User.create(username: "Joonas Donskoi", password: "Donkey", profile_pic_url: "http://www.thehockeynews.com/blog/wp-content/uploads/2016/01/Joonas-Donskoi-San-Jose-Sharks-featured-640x426.jpg")
User.create(username: "Tomas Hertl", password: "TMNH48", profile_pic_url: "http://minustwentytwo.com/wp-content/uploads/2013/12/tomas-hertl-sharks.jpg")
User.create(username: "Melker Karlsson", password: "Melkman", profile_pic_url: "http://www4.pictures.zimbio.com/gi/Edmonton+Oilers+v+San+Jose+Sharks+c253RhwQ4bAl.jpg")
User.create(username: "Patrick Marleau", password: "gutless", profile_pic_url: "http://cdn.fansided.com/wp-content/blogs.dir/229/files/2014/01/7900448.jpg")
User.create(username: "Matt Nieto", password: "torpedo", profile_pic_url: "http://www4.pictures.zimbio.com/gi/Matt+Nieto+KXDJOK0NNxGm.jpg")
User.create(username: "Joe Pavelski", password: "pokey8", profile_pic_url: "http://www.jtbourne.com/wp-content/uploads/2011/04/pavelski.jpg")
User.create(username: "Nick Spaling", password: "sapling", profile_pic_url: "http://www2.pictures.zimbio.com/gi/Montreal+Canadiens+v+San+Jose+Sharks+WXXt46vqe3Bl.jpg")
User.create(username: "Chris Tierney", password: "tierney", profile_pic_url: "http://1.cdn.nhle.com/sharks/images/upload/2015/02/20150203-tierney-dl.jpg")
User.create(username: "Joel Ward", password: "Wardo42", profile_pic_url: "http://www.gannett-cdn.com/-mm-/e833d8be1bd8e6006a3e10deed7ad7815be0de16/c=708-38-2613-1470&r=x404&c=534x401/local/-/media/2015/11/09/USATODAY/USATODAY/635826730379310767-USP-NHL-San-Jose-Sharks-at-Colorado-Avalanche.jpg")
User.create(username: "Dainius Zubrus", password: "Zubeezubeezoob", profile_pic_url: "https://cdn2.vox-cdn.com/thumbor/WgBqSA1Z_L-vC0UE_Nb9iAmFBC8=/0x140:1926x1424/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/48620375/usa-today-8991780.0.jpg")
User.create(username: "Justin Braun", password: "Brauny", profile_pic_url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5470.png&w=350&h=254")
User.create(username: "Dylan Demelo", password: "goSharks", profile_pic_url: "http://cdn3-www.hockeysfuture.com/assets/uploads/2012/05/dylan_demelo_san_jose.jpg")
User.create(username: "Paul Martin", password: "Marty7", profile_pic_url: "http://www3.pictures.zimbio.com/gi/Paul+Martin+San+Jose+Sharks+v+Arizona+Coyotes+NFwEKzrwnVSl.jpg")
User.create(username: "Roman Polak", password: "Polak46", profile_pic_url: "http://www1.pictures.zimbio.com/gi/Roman+Polak+San+Jose+Sharks+v+Colorado+Avalanche+4N60Ce1YZI8l.jpg")
User.create(username: "Matt Tennyson", password: "ReavesCantHurtMe", profile_pic_url: "http://2.cdn.nhle.com/sharks/images/upload/2016/01/20160104-tennyson-dl.jpg")
User.create(username: "Marc-Edouard Vlasic", password: "Pickles", profile_pic_url: "http://www.thehockeynews.com/blog/wp-content/uploads/2014/04/482369337-640x427.jpg")
User.create(username: "James Reimer", password: "OptimusReim", profile_pic_url: "http://www.thehockeynews.com/blog/wp-content/uploads/2016/03/James-Reimer-SJS-mask-full.jpg")
Lake.create(name: "Lake Almanor", image_url: "https://courageworldwide.org/couragerun/files/2015/06/04-lake-almanor.jpg")
Lake.create(name: "Lake Berryessa", image_url: "http://www.usbr.gov/mp/ccao/berryessa/albums/scenery/lake-berryessa.jpg")
Lake.create(name: "Lake Camanche", image_url: "http://wineandgoldcountry.com/0114/images/011914_pic03.jpg")
Lake.create(name: "Clear Lake", image_url: "http://www.summitpost.org/images/original/887877.jpg")
Lake.create(name: "Donner Lake", image_url: "http://www.tahoerunco.com/wp-content/uploads/2012/05/Donner-Lake-2.jpg")
Lake.create(name: "Don Pedro Reservoir", image_url: "http://www.donpedrolake.com/sites/default/files/banner/dp-lake.jpg")
Lake.create(name: "Eagle Lake", image_url: "https://beartracksblog.files.wordpress.com/2012/10/eagle-lake1.jpg")
Lake.create(name: "Fallen Leaf Lake", image_url: "http://images.fineartamerica.com/images/artworkimages/mediumlarge/1/evening-at-fallen-leaf-lake-jacek-joniec.jpg")
Lake.create(name: "Folsom Lake", image_url: "http://tribfox40.files.wordpress.com/2013/05/folsom-lake.jpeg")
Lake.create(name: "Lake McClure", image_url: "https://i.ytimg.com/vi/fEI6o2XvGPY/maxresdefault.jpg")
Lake.create(name: "New Bullards Bar Reservoir", image_url: "http://farm2.static.flickr.com/1233/1196815290_89dc2f6fa1_o.jpg")
Lake.create(name: "New Hogan Lake", image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/USACE_New_Hogan_Lake_and_Dam.jpg")
Lake.create(name: "New Melones Lake", image_url: "https://joseymiller.files.wordpress.com/2009/12/before.jpg")
Lake.create(name: "Lake Oroville", image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Lake_Oroville.jpg")
Lake.create(name: "Pinecrest Lake", image_url: "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5358662.jpg")
Lake.create(name: "Lake Shasta", image_url: "http://theinnatshastalake.com/wp-content/uploads/2014/08/shasta006.jpg")
Lake.create(name: "Lake Sonoma", image_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sonoma_Lake_aerial_view.jpg")
Lake.create(name: "Stampede Reservoir", image_url: "http://2.bp.blogspot.com/-rDUDEQimZYk/UU_6wkg5rlI/AAAAAAAABfk/KRF4XsY3whw/s1600/DSCN0001.JPG")
Lake.create(name: "Lake Tahoe", image_url: "http://www.sierraclub.org/sites/www.sierraclub.org/files/sce/tahoe-area-group/Lake%20Tahoe%20from%20Hidden%20Beach.jpg")
Lake.create(name: "Trinity Lake", image_url: "http://static.panoramio.com/photos/original/5221721.jpg")
Lake.create(name: "Bass Lake", image_url: "https://i.ytimg.com/vi/XE3SF5Ndu_I/maxresdefault.jpg")
Lake.create(name: "Lake Edison", image_url: "http://ww4.hdnux.com/photos/30/55/74/6479643/3/rawImage.jpg")
Lake.create(name: "Florence Lake", image_url: "http://static.panoramio.com/photos/large/14328490.jpg")
Lake.create(name: "Huntington Lake", image_url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Shaver_Lake_1.jpg")
Lake.create(name: "Isabella Lake", image_url: "https://upload.wikimedia.org/wikipedia/en/5/59/Lake_Isabella_California_eastern_portion.JPG")
Lake.create(name: "Millerton Lake", image_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Millerton_Lake_State_Recreation_Area_4.jpg")
Lake.create(name: "Lake Nacimiento", image_url: "http://images4.mygola.com/84948cb7ba27b1eb5deb776095f6110f_1394282797_l.jpg")
Lake.create(name: "Pine Flat Lake", image_url: "http://www.fresnobee.com/news/local/w35uu9/picture50594145/ALTERNATES/LANDSCAPE_1140/pine%20flat")
Lake.create(name: "Lake San Antonio", image_url: "https://i.ytimg.com/vi/5IfyCRvkaRc/maxresdefault.jpg")
Lake.create(name: "Santa Margarita Lake", image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Santa_Margarita_Lake_1.jpg")
Lake.create(name: "Shaver Lake", image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Balsam_Forebay_above_Shaver_Lake.jpg")
Lake.create(name: "Big Bear Lake", image_url: "http://cdn1.media.zp-cdn.com/18861/BB-Aerials-240-82ad22.jpg")
Lake.create(name: "Lake Cachuma", image_url: "https://www.countyofsb.org/uploadedImages/countyofsb/Styles/bgimages/bradburysnow.jpg")
Lake.create(name: "Lake Casitas", image_url: "http://www.drivecms.com/uploads/casitaswater.org/317560006Boating%20with%20snow%20on%20topas.JPG")
Lake.create(name: "Castaic Lake", image_url: "https://lovelyandlight.files.wordpress.com/2013/04/castaic-lake2.jpg")
Lake.create(name: "Diamond Valley Lake", image_url: "http://gotravelaz.com/wp-content/uploads/images/Diamond_Valley_8239.jpg")
Lake.create(name: "El Capitan Reservoir", image_url: "https://i.ytimg.com/vi/RxqeyFRC1ic/maxresdefault.jpg")
Lake.create(name: "Lake Havasu", image_url: "http://mavensphotoblog.com/wp-content/uploads/2012/03/BOR-Parker-Dam-Lake-Havasu.jpg")
Lake.create(name: "Lake Perris", image_url: "http://www.briskwalkers.com/userfiles/image/lake-perris1-e1352219909807(1).jpeg")
Lake.create(name: "Lake Piru", image_url: "http://www.lido14.org/Archives/2005/2005LakePiruRegatta/2005LakePiruWater.jpg")
Lake.create(name: "Silverwood Lake", image_url: "http://farm6.staticflickr.com/5248/5344842866_d358483f41_o.jpg")
Lake.create(name: "June Lake", image_url: "http://www.californiafallcolor.com/wp-content/uploads/2013/10/AV-June-Lake.jpg")
Lake.create(name: "Mammoth Pool Reservoir", image_url: "http://todaysoutdoorlife.com/wp-content/uploads/2014/11/picture0009.jpg")
Lake.create(name: "Mono Lake", image_url: "http://www.summitpost.org/images/original/632964.jpg")

activities = ["Wakeboarding", "Wakesurfing", "Kneeboarding", "Tubing", "Waterskiing"]
boat_types = ["wakeboard", "waterski"]
postingCount = 0
(1..44).each do |lake|
  if(lake % 4 == 0)
    month = rand(7)+6
    day=rand(28)+1
    start_hour=rand(8)+5
    end_hour= start_hour + rand(9)+2
    boat = boat_types[rand(boat_types.length)]
    if (boat=="wakeboard")
      sport=activities[rand(activities.length - 1)]
    else
      sport="Waterskiing"
    end
    Posting.create(user_id: 1,
    start_time: DateTime.new(2016,month,day,start_hour,0,0),
    end_time: DateTime.new(2016,month,day,end_hour,0,0), boat_type: boat, activity: sport,
    lake_id: lake, posting_type: "Hosts")
    postingCount += 1

    if(rand(6)==3)
      BoatingRequest.create(status:"Pending", sending_user_id: rand(23)+2, receiving_user_id: 1, posting_id: postingCount)
    end

    Posting.create(user_id: 1,
    start_time: DateTime.new(2016,month,day,start_hour,0,0),
    end_time: DateTime.new(2016,month,day,end_hour,0,0), boat_type: boat, activity: sport,
    lake_id: lake, posting_type: "Guests")
    postingCount+= 1
  end
end


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
      sport="Waterskiing"
    end
    Posting.create(user_id: user,
    start_time: DateTime.new(2016, month, day, start_hour, 0, 0), end_time:
    DateTime.new(2016, month, day, end_hour, 0, 0), boat_type: boat,
    lake_id: lake, activity: sport, posting_type: "Hosts")
    postingCount += 1
    rand_num = rand(9)
    if(rand_num == 1 && user != 1)
      BoatingRequest.create(status: "Accepted", sending_user_id: 1,
      receiving_user_id: user, posting_id: postingCount)
    elsif (rand_num == 2 && user != 1)
      BoatingRequest.create(status: "Declined", sending_user_id: 1,
      receiving_user_id: user, posting_id: postingCount)
    elsif (rand_num == 3 && user != 1)
      if(rand(3) == 1)
        BoatingRequest.create(status: "Pending", sending_user_id: 1,
        receiving_user_id: user, posting_id: postingCount)
      end
    end

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
      sport="Waterskiing"
    end
    Posting.create(user_id: user,
    start_time: DateTime.new(2016, month, day, start_hour, 0, 0), end_time:
    DateTime.new(2016, month, day, end_hour, 0, 0), boat_type: boat,
    lake_id: lake, activity: sport, posting_type: "Guests")
    postingCount += 1
    rand_num=rand(9)
    if(rand_num == 1 && user != 1)
      BoatingRequest.create(status: "Accepted", sending_user_id: 1,
      receiving_user_id: user, posting_id: postingCount)
    elsif (rand_num == 2 && user != 1)
      BoatingRequest.create(status: "Declined", sending_user_id: 1,
      receiving_user_id: user, posting_id: postingCount)
    elsif (rand_num == 3 && user != 1)
      if(rand(3)== 2)
        BoatingRequest.create(status: "Pending", sending_user_id: 1,
        receiving_user_id: user, posting_id: postingCount)
      end
    end
  end
end
