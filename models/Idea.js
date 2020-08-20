const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IdeaSchema = new Schema({
    placename: 
    {
        type: String,
        require: true
    },
    image:
    {
        type: String,
        required: true
    },
    category: 
    {
        type: String,
        require: true
    },

    where: 
    {
        type: String,
        require: true
    },
    activeness: 
    {
        type: String,
        require: true
    },
    age:
     {
        type: String,
    },
    address: 
    {
        type: String,
        require: true
    },
    phone:
    {
        type: String,
        require: true
    },
    website:
    {
        type: String,
        require: true
    }
});

module.exports = Idea = mongoose.model("Idea", IdeaSchema);