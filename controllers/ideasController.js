const db = require("../models");

// Defining methods for the IdeasController
module.exports = {
  findAll: function (req, res) {
    db.Idea
      .find(req.query)
      .then(dbIdea => res.json(dbIdea))
      .catch(err => res.status(422).json(err));
  },

  findWhere: function (req, res) {
    console.log("request params:" +req.params);
    db.Idea
      .findById(req.params.id)
      .then(dbIdea => res.json(dbIdea))
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