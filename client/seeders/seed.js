var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/activities", {
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