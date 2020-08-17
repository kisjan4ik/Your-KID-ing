const express = require ("express");
const router = express.Router();
const Idea = require("../models/Idea");

router.get("/", (req, res) => {
    Idea.find({})
    .then((data) => {
        console.log("Data:", data);

    })
    .catch((error) => {
        
    })
})

router.post("/save", (req, res) => {
    const data = req.body;
    const newIdea = new Idea(data);

    newIdea.save((error) => {
        if (error) {
            res.status(500).json({msg: "Internal server errors"});
            return;
        }
        return res.json({
            msg: "Data is saved!"
        })
    })

})

