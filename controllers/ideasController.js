const db = require("../models");

// Defining methods for the IdeasController
module.exports = {
  findAll: function (req, res) {
    db.Idea
      .find(req.query)
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  },
  // set variables to parameters and lowercase then to match the db"
  findWhere: function (req, res) {
    // let activeness = req.params.activeness.toLowerCase();
    let where = req.params.where.toLowerCase();
    let age = req.params.age.toLowerCase();

    // going through the db filtering it by input params
    db.Idea.find({ 
      // "activeness": activeness, 
      "where": where, "age": age })
      .then(dbIdea => {
        console.log(dbIdea);
        res.json(dbIdea)
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Idea
      .findById(req.params.id)
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Idea
      .create(req.body)
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Idea
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Idea
      .findById({ _id: req.params.id })
      .then(dbIdea => dbIdea.remove())
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  }
};