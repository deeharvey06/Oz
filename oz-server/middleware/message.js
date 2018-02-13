const db = require("../models");

exports.getMessages = function(req, res, next) {
  db.Message.find().sort({createAt: 'desc'})
    .populate("userId", {username: true, profileImageUrl: true})
    .then(function(messages) {
      res.json(messages);
    })
    .catch(function(err) {
      res.status(500).json(err);
    })
}