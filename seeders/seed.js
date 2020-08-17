var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/idea", {
  useNewUrlParser: true
});

var ideaSeed = [
    {
        placename: "Aerophile at Disney Springs",
        image: "air adventure",
        category: "Air adventures",
        where: "outdoor",
        activeness: "moderate",
        age: "3+",
        address: "1590 E Buena Vista Dr., Lake Buena Vista, FL, 32836",
        phone: "(407) 828-3800",
        website: "https://www.charactersinflight.com/"    
    },
    {
        placename: "Aerostat Adventures Hot Air Balloon Ride",
        image: "air adventure",
        category: "Air adventures",
        where: "outdoor",
        activeness: "moderate",
        age: "6+",
        address: "8849 West Irlo Bronson Memorial Highway, Winter Garden, FL, 34787",
        phone: "407-476-7101",
        website: "http://orlandohotairballoon.com/"
    },
    {
        placename: "Air Force Fun Helicopter Tours",
        image: "air adventure",
        category: "Air adventures",
        where: "outdoor",
        activeness: "moderate",
        age: "2+",
        address: "5525 International Drive, Orlando, Florida 32819, United States",
        phone: "407-603-3286",
        website: "https://airforcefun.com/home"
    },
    {
        placename: "Andretti Indoor Karting and Games",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "indoor",
        activeness: "active",
        age: "2+",
        address: "9299 Universal Blvd, Orlando, FL, 32819",
        phone: "407-374-0085",
        website: "https://andrettikarting.com/orlando/"
    },
    {
        placename: "Fun Spot",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "indoor",
        activeness: "active",
        age: "2+",
        address: "5700 Fun Spot Way, Orlando, FL, 32819",
        phone: "(407) 363-3867",
        website: "https://fun-spot.com/"
    },
    {
        placename: "Funtania Family Fun Center",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "indoor",
        activeness: "active",
        age: "5+",
        address: "5601 International Drive, Ste 6845, Orlando, FL, 32819",
        phone: "(407) 378-6882",
        website: "https://www.funtaniaorlando.com/"
    },
    {
        placename: "Icon Park",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "8401 International Drive, Orlando, FL, 32819",
        phone: "866-228-6438",
        website: "https://iconparkorlando.com/"
    },
    {
        placename: "Sea World Adventure Parks",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "outdoor",
        activeness: "active",
        age: "0+",
        address: "Sea World Drive, Orlando, FL, 32821",
        phone: "407-545-5550",
        website: "https://seaworld.com/orlando/orlando-parks/"
    },
    {
        placename: "Universal Orlando Resorts",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "outdoor",
        activeness: "active",
        age: "0+",
        address: "6000 Universal Blvd, Orlando, FL, 32819",
        phone: "407-363-8000",
        website: "https://www.universalorlando.com/web/en/us"
    },
    {
        placename: "Walt Disney World Resort",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "outdoor",
        activeness: "active",
        age: "0+",
        address: "Walt Disney World, Bay Lake and Lake Buena Vista, Florida, 32830",
        phone: "(407) 939-2273",
        website: "https://disneyworld.disney.go.com/"
    },
    {
        placename: "Wonderworks",
        image: "Parks and Rides",
        category: "Amusement Parks and Rides",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "9067 International Drive, Orlando, FL, 32819",
        phone: "(407) 351-8800",
        website: "https://www.wonderworksonline.com/orlando"
    },
    {
        placename: "Gator Golf Adventure Park",
        image: "animal",
        category: "Animal Encounters",
        where: "outdoor",
        activeness: "moderate",
        age: "4+",
        address: "6586 International Drive, Orlando, FL, 32819",
        phone: "(407) 363-2001",
        website: "https://www.idrivegatorgolf.com/"
    },
    {
        placename: "Gatorland",
        image: "animal",
        category: "Animal Encounters",
        where: "outdoor",
        activeness: "moderate",
        age: "3+",
        address: "14501 S. Orange Blossom Trail, Orlando, FL, 32837",
        phone: "(800) 393-5297",
        website: "https://www.gatorland.com/"
    },
    {
        placename: "Jungle Adventures Nature Animal Park",
        image: "animal",
        category: "Animal Encounters",
        where: "outdoor",
        activeness: "moderate",
        age: "3+",
        address: "26205 E. Colonial Dr., Christmas, FL, 32709",
        phone: "(407) 568-2885",
        website: "https://www.jungleadventures.com/index.html"
    },
    {
        placename: "SEA LIFE Orlando Aquarium",
        image: "animal",
        category: "Animal Encounters",
        where: "outdoor",
        activeness: "moderate",
        age: "0+",
        address: "8449 International Drive, Orlando, FL, 32819",
        phone: "866-228-6444",
        website: "https://www.visitsealife.com/orlando/"
    },
    {
        placename: "AMF Sky Lanes",
        image: "bowling",
        category: "bowling",
        where: "indoor",
        activeness: "acive",
        age: "6+",
        address: "7401 S. Orange Blossom Trail, Orlando, FL, 32809",
        phone: "(407) 855-5731",
        website: "https://www.amf.com/"
    },
    {
        placename: "AMF Sky Lanes",
        image: "bowling",
        category: "bowling",
        where: "indoor",
        activeness: "acive",
        age: "6+",
        address: "7401 S. Orange Blossom Trail, Orlando, FL, 32809",
        phone: "(407) 855-5731",
        website: "https://www.amf.com/"
    },
    {
        placename: "Arcade City",
        image: "arcade",
        category: "arcade",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "8445 International Drive, Orlando, FL, 32819",
        phone: "(407) 233-3501",
        website: "https://faceamusement.com/arcade-city/"
    },
    {
        placename: "Astro Skate Family Fun Center",
        image: "skate",
        category: "skate",
        where: "indoor",
        activeness: "acive",
        age: "4+",
        address: "866 S. Goldenrod Rd., Orlando, FL, 32822",
        phone: "(407) 282-3140",
        website: "https://astroskatingcenter.com/"
    },
    {
        placename: "Chuck E. Cheese's",
        image: "arcade",
        category: "arcade",
        where: "indoor",
        activeness: "acive",
        age: "3+",
        address: "7419 International Dr.Orlando, FL 32819",
        phone: "(407) 351-3369",
        website: "https://www.chuckecheese.com/"
    },
    {
        placename: "I-Drive NASCAR Indoor Karts",
        image: "karts",
        category: "karts",
        where: "indoor",
        activeness: "acive",
        age: "8+",
        address: "5228 Vanguard Street, Orlando, Fl, 32819",
        phone: "4078088802",
        website: "https://www.idrivenascar.com/"
    },
    {
        placename: "Central Florida Railroad Museum",
        image: "museum",
        category: "Free Fun",
        where: "indoor",
        activeness: "moderate",
        age: "6+",
        address: "101 South Boyd Street, Winter Garden, FL, 34787",
        phone: "(407) 656-0559",
        website: "https://www.cfrhs.org/"
    },
    {
        placename: "Orlando Fire Museum",
        image: "museum",
        category: "Free Fun",
        where: "indoor",
        activeness: "moderate",
        age: "6+",
        address: "814 E. Rollins St., Orlando, FL, 32803",
        phone: "(407) 246-3468",
        website: "https://www.orlandofiremuseum.org/"
    },
    {
        placename: "Russian Ballet Orlando- Free Sunday Classes",
        image: "ballet",
        category: "Free Fun",
        where: "indoor",
        activeness: "active",
        age: "3+",
        address: "618 N. Mills Ave., Orlando, FL, 32803",
        phone: "(407) 896-0309",
        website: "https://www.russianballetorlando.org/"
    },
    {
        placename: "Splash Pad and Pavilion",
        image: "splash",
        category: "Free Fun",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "104 S. Lakeview Ave., Winter Garden, FL, 34787",
        phone: "407-656-4111",
        website: "https://www.cwgdn.com/Facilities/Facility/Details/Downtown-Splashpad-Pavilion-7"
    },
    {
        placename: "Disney's Boardwalk",
        image: "park",
        category: "Free Fun",
        where: "outdoor",
        activeness: "moderate",
        age: "0+",
        address: "2101 N Epcot Resorts Blvd., Orlando, FL, 32836",
        phone: "(407) 939-2273",
        website: "https://disneyworld.disney.go.com/destinations/boardwalk/"
    },
    {
        placename: "Fort Christmas Historical Park and Museum",
        image: "museum",
        category: "Free Fun",
        where: "outdoor",
        activeness: "moderate",
        age: "0+",
        address: "1300 Fort Christmas Road, Christmas, FL, 32709",
        phone: "407-254-9310",
        website: "http://www.ocfl.net/cultureparks/parks.aspx?m=dtlvw&d=15#.Xzbx9ehKiM9"
    },
    {
        placename: "Home Depot FREE Kids Workshop",
        image: "workshop",
        category: "Free Fun",
        where: "indoor",
        activeness: "moderate",
        age: "3+",
        address: "350 N Alafaya Trail Orlando, FL 32828",
        phone: "(321)235-3600",
        website: "https://www.homedepot.com/workshops/"
    },
    {
        placename: "Mead Botanical Gardens",
        image: "park",
        category: "Free Fun",
        where: "outdoor",
        activeness: "moderate",
        age: "3+",
        address: "1500 S. Denning Drive, Winter Park, FL, 32789",
        phone: "407-765-6323",
        website: "https://www.meadgarden.org/"
    },
    {
        placename: "Crayola Experience",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "3+",
        address: "8001 S. Orange Blossom Trail, Orlando, FL, 32809",
        phone: "(407) 757-1700",
        website: "https://www.crayolaexperience.com/orlando"
    },
    {
        placename: "Main Event",
        image: "bowling",
        category: "bowling",
        where: "indoor",
        activeness: "active",
        age: "8+",
        address: "9101 International Drive, #1032, Orlando, FL, 32819",
        phone: "(407) 352-3300",
        website: "https://www.mainevent.com/"
    },
    {
        placename: "Outer Limitz Indoor Trampoline Area",
        image: "trampoline",
        category: "trampoline",
        where: "indoor",
        activeness: "active",
        age: "5+",
        address: "6725 South Kirkman Road, Orlando, FL, 32819",
        phone: "407-704-6723",
        website: "https://www.outerlimitzorlando.com/"
    },
    {
        placename: "East Orange County R/C Raceway",
        image: "racing",
        category: "racing",
        where: "outdoor",
        activeness: "active",
        age: "5+",
        address: "1251 S CR-13, Orlando, FL",
        phone: "(407) 415-5455",
        website: "https://www.facebook.com/eastorangecountyrc"
    },
    {
        placename: "K1 Speed Orlando",
        image: "racing",
        category: "racing",
        where: "indoor",
        activeness: "active",
        age: "6+",
        address: "9550 Parksouth Court, Orlando, FL, 32837",
        phone: "407-434-7500",
        website: "https://www.k1speed.com/"
    },
    {
        placename: "Albin Polasek Museum and Sculpture Garden",
        image: "museum",
        category: "museum",
        where: "indoor",
        activeness: "moderate",
        age: "5+",
        address: "633 Osceola Avenue, Winter Park, FL, 32789",
        phone: "407-647-6294",
        website: "http://polasek.org/"
    },
    {
        placename: "Chocolate Kingdom - The Factory Adventure Tour",
        image: "museum",
        category: "museum",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "9901 Hawaiian Court, Orlando, FL, 32819",
        phone: "407-705-3475",
        website: "http://www.chocolatekingdom.com/"
    },
    {
        placename: "Chocolate Museum and Cafe",
        image: "museum",
        category: "museum",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "11701 International Drive, Orlando, FL, 32821",
        phone: "(407) 778-4871",
        website: "http://www.wocorlando.com/"
    },
    {
        placename: "Holy Land Experience",
        image: "museum",
        category: "religion",
        where: "outdoor",
        activeness: "moderate",
        age: "4+",
        address: "4655 Vineland Road, Orlando, FL, 32811",
        phone: "(407) 872-2272",
        website: "https://holylandexperience.com/"
    },
    {
        placename: "Medieval Times",
        image: "theater",
        category: "theater",
        where: "indoor",
        activeness: "moderate",
        age: "10+",
        address: "4510 W. Vine Street, Kissimmee, FL, 34746",
        phone: "(888) 543-9637",
        website: "https://www.medievaltimes.com/"
    },
    {
        placename: "Winter Park History Museum",
        image: "museum",
        category: "museum",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "200 W. New England Avenue, Winter Park, FL, 32789",
        phone: "407-647-2330",
        website: "https://www.wphistory.org/"
    },
    {
        placename: "All Fired Up",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "10+",
        address: "229 West Fairbanks Avenue, Winter Park, FL, 32789",
        phone: "(407) 644-9363",
        website: "http://www.allfireduponline.com/"
    },
    {
        placename: "Art Room",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "709 Main Street, Windermere, FL, 34786",
        phone: "(407) 909-1869",
        website: "https://artroomorlando.com/index.htm"
    },
    {
        placename: "Nailed It DIY Studio",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "6+",
        address: "12789 Waterford Lakes Pkwy #6, Orlando, FL, 32828",
        phone: "(407) 680-3950",
        website: "https://orlando.naileditdiy.com/"
    },
    {
        placename: "Painting with a Twist",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "7+",
        address: "6700 Conroy Windermere Rd., Orlando, FL, 32835",
        phone: "(407) 601-7800",
        website: "https://www.paintingwithatwist.com/studio/orlando"
    },
    {
        placename: "Pottery Studio",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "4+",
        address: "363 North Parramore Avenue, Orlando, FL, 32801",
        phone: "(407) 246-4488",
        website: "https://www.orlando.gov/Community-Programs-Events/Pottery-Studio"
    },
    {
        placename: "Super Awesome Cool Pottery",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "3+",
        address: "6100 S. Orange Ave., Orlando, FL, 32809",
        phone: "407-720-3699",
        website: "https://www.superawesomecool.com/"
    },
    {
        placename: "The Art Corner by Artistic Talent Group",
        image: "arts and crafts",
        category: "creativity",
        where: "indoor",
        activeness: "moderate",
        age: "5+",
        address: "Disney Springs ~ Walt Disney World Resort, Orlando, FL, 32830",
        phone: "407-560-8397",
        website: "https://artistictalentgroup.com/the-art-corner/"
    },
    {
        placename: "Congo River Golf",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "12193 E Colonial Dr.Orlando, FL",
        phone: "(407) 823-9700",
        website: "https://www.congoriver.com/"
    },
    {
        placename: "Disney's Fantasia Gardens and Fairways Miniature Golf",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "1205 Epcot Resorts Blvd., Orlando, FL, 32836",
        phone: "(407) 560-4870",
        website: "https://disneyworld.disney.go.com/recreation/fantasia-gardens-fairways-miniature-golf/"
    },
    {
        placename: "Disney's Winter Summerland Miniature Golf",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "1548 Buena Vista Dr., Orlando, FL, 32836",
        phone: "(407) 939-5277",
        website: "https://disneyworld.disney.go.com/recreation/winter-summerland-miniature-golf/"
    },
    {
        placename: "Hawaiian Rumble Adventure Golf",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "13529 S. Apopka Vineland Rd., Orlando, FL, 32386",
        phone: "(407) 239-8300",
        website: "http://www.hawaiianrumbleorlando.com/"
    },
    {
        placename: "Hollywood Drive in Golf",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "Universal CityWalk Orlando, Orlando, FL, 32819",
        phone: "(407) 802-4848",
        website: "https://www.hollywooddriveingolf.com/"
    },
    {
        placename: "LOST CAVERNS ADVENTURE GOLF",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "6306 INTERNATIONAL DR.,ORLANDO, FL 32819",
        phone: "(407) 264-0560",
        website: "https://www.lostcavernsgolf.com/"
    },
    {
        placename: "LOST CAVERNS ADVENTURE GOLF",
        image: "minigolf",
        category: "minigolf",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "6306 INTERNATIONAL DR.,ORLANDO, FL 32819",
        phone: "(407) 264-0560",
        website: "https://www.lostcavernsgolf.com/"
    },
    {
        placename: "AMC Disney Springs 24 with Dine-In Theatres",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "1500 E. Buena Vista Dr., Lake Buena Vista, FL, 32830",
        phone: "(407) 827-1308",
        website: "https://www.amctheatres.com/movie-theatres/orlando-daytona-beach/amc-dine-in-disney-springs-24"
    },
    {
        placename: "AMC West Oaks 14",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "9415 W. Colonial Dr., Ocoee, FL, 34761",
        phone: "(407) 290-1265",
        website: "https://www.amctheatres.com/movie-theatres/orlando-daytona-beach/amc-west-oaks-14"
    },
    {
        placename: "Avalon Park Movie Under the Stars",
        image: "movie",
        category: "movie",
        where: "outdoor",
        activeness: "passive",
        age: "0+",
        address: "3680 Avalon Park East Blvd. Ste. 300, Orlando, FL, 32828",
        phone: "(407) 658-6565",
        website: "https://www.avalonpark.com/news-events/events/"
    },
    {
        placename: "Cinemark Artegon Marketplace and XD",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "5150 International Drive, Orlando, FL, 32819",
        phone: "(407) 352-1042",
        website: "https://www.cinemark.com/theatres/fl-orlando/cinemark-orlando-and-xd"
    },
    {
        placename: "Cinepolis Luxury Cinemas Hamlin",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "14111 Shoreside Way, Winter Garden, FL",
        phone: "(321)250-3580",
        website: "https://cinepolisusa.com/home"
    },
    {
        placename: "Cobb Theaters Plaza Cinema Cafe 12",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "155 S. Orange Ave., Orlando, FL, 32801",
        phone: "(321) 558-2878",
        website: "https://www.cmxcinemas.com/plazacinema12.aspx"
    },
    {
        placename: "Popcorn Flicks",
        image: "movie",
        category: "movie",
        where: "outdoor",
        activeness: "passive",
        age: "0+",
        address: "251 S. Park Avenue, Winter Park, FL, 32789",
        phone: "(407) 629-1088 ext. 230",
        website: "https://enzian.org/films/special-programs/popcorn-flicks/"
    },
    {
        placename: "Premiere Cinemas",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "3201 E. Colonial Dr., Orlando, FL, 32803",
        phone: "(407) 894-0545",
        website: "https://www.pccmovies.com/index.php"
    },
    {
        placename: "Regal Entertainment Group",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "510 North Orlando Ave, Winter Park, FL 32789",
        phone: "(844) 462-7342",
        website: "https://www.regmovies.com/"
    },
    {
        placename: "Touchstar Cinemas",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "12441 South Orange Blossom Tra, Orlando, FL, 32837",
        phone: "(407) 888-2025",
        website: "https://www.touchstarcinemas.com/locations.asp"
    },
    {
        placename: "Universal Cinemark",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "6000 Universal Blvd. #740, Orlando, FL, 32819",
        phone: "(407) 354-3374",
        website: "https://www.cinemark.com/theatres/fl-orlando/universal-cinemark-at-citywalk#theatreInfo"
    },
    {
        placename: "West Orange Cinema",
        image: "movie",
        category: "movie",
        where: "indoor",
        activeness: "passive",
        age: "0+",
        address: "1575 Maguire Road, Ocoee, FL, 34761",
        phone: "407-877-8111",
        website: "http://www.westorange5.com/index.html"
    },
    {
        placename: "Cornell Fine Arts Museum",
        image: "museum",
        category: "museum",
        where: "indoor",
        activeness: "moderate",
        age: "5+",
        address: "1000 Holt Avenue, Winter Park, FL, 32789",
        phone: "(407) 646-2526",
        website: "https://www.rollins.edu/cornell-fine-arts-museum/education/"
    },
    {
        placename: "DEFY Orlando",
        image: "extreme air sport",
        category: "extreme air sport",
        where: "indoor",
        activeness: "active",
        age: "3+",
        address: "8010 W Colonial Drive, Orlando, FL, 32818",
        phone: "407-307-3700",
        website: "https://defy.com/locations/defy-orlando/"
    },
    {
        placename: "Epic Axe Throwing",
        image: "extreme sport",
        category: "extreme sport",
        where: "indoor",
        activeness: "active",
        age: "13+",
        address: "47 East Robinson Street, Orlando, FL, 32801",
        phone: "385-429-3386",
        website: "https://www.epicaxethrowing.com/"
    },
    {
        placename: "Fort Barachel Skate Park",
        image: "skating",
        category: "skating",
        where: "indoor",
        activeness: "active",
        age: "4+",
        address: "130 N. West Crown Point, Winter Garden, FL, 34787",
        phone: "(407) 877-5949",
        website: "https://www.epicaxethrowing.com/"
    },
    {
        placename: "Metro Skateboard Academy",
        image: "skating",
        category: "skating",
        where: "indoor",
        activeness: "active",
        age: "4+",
        address: "4624 L.B. McLeod Road, Orlando, FL, 32811",
        phone: "(407) 650-8171",
        website: "https://metroskateboardacademy.com/park.html"
    },
    {
        placename: "Orlando Skate Park",
        image: "skating",
        category: "skating",
        where: "outdoor",
        activeness: "active",
        age: "5+",
        address: "400 Festival Way, Orlando, FL, 32803",
        phone: "(407) 246-2800",
        website: "https://www.orlando.gov/Parks-the-Environment/Directory/Orlando-Skate-Park"
    },
    {
        placename: "Pirate's Dinner Adventure",
        image: "theater",
        category: "theater",
        where: "indoor",
        activeness: "passive",
        age: "3+",
        address: "6400 Carrier Drive, Orlando, FL, 32819",
        phone: "407-248-0590",
        website: "https://piratesdinneradventure.com/orlando/"
    },
    {
        placename: "Airboat Rides at Midway",
        image: "boat rides",
        category: "boat rides",
        where: "outdoor",
        activeness: "active",
        age: "5+",
        address: "28501 East Colonial Drive, Christmas, FL, 32709",
        phone: "(407) 568-6790",
        website: "https://www.airboatridesatmidway.com/"
    },
    {
        placename: "A-Awesome Air Boat Rides",
        image: "boat rides",
        category: "boat rides",
        where: "outdoor",
        activeness: "active",
        age: "5+",
        address: " Orlando, FL, 32819",
        phone: "(407) 568-7601",
        website: "https://airboatride.com/"
    },
    {
        placename: "Buena Vista Watersports",
        image: "watersports",
        category: "watersports",
        where: "outdoor",
        activeness: "active",
        age: "3+",
        address: "13245 Lake Bryan Drive, Orlando, FL, 32821",
        phone: "(407) 239-6939",
        website: "https://airboatride.com/"
    },
    {
        placename: "OWC Aquapark",
        image: "watersports",
        category: "watersports",
        where: "outdoor",
        activeness: "active",
        age: "6+",
        address: "8615 Florida Rock Road, Orlando, Florida",
        phone: "407-251-3100",
        website: "https://www.orlandowatersports.com/"
    }, {
        placename: "Universal's Volcano Bay Water Park",
        image: "water park",
        category: "water park",
        where: "outdoor",
        activeness: "active",
        age: "0+",
        address: "6000 Universal Blvd, Orlando, FL, 32819",
        phone: "(407) 363-8000",
        website: "https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay"
    },

]

db.Idea.deleteMany({})
.then(() => db.Idea.collection.insertMany(ideaSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});