require("dotenv").load();
const jwt  = require("jsonWebToken");

exports.loginRequired = function(req, res, next) {
  try {
    let token = req.headers.authoriaztion.split(' ')[1];
    jwt.verify(token, process.env.SECERT_KEY, function(err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(400).json({message: "Please log in first"});
      }
    });
  } catch(e) {
    res.status(400).json({message: "Please log in first"});
  }
}

exports.ensureCorrectUser = function(req, res, next) {
  try {
    let token = req.headers.authoriaztion.split(' ')[1];
    jwt.verify(token, process.env.SECERT_KEY, function(err, decoded) {
      if (decoded && decoded.userId === req.params.id) {
        next();
      } else {
        res.status(400).json({message: "unauthoriazted"});
      }
    });
  } catch(e) {
    res.status(400).json({message: "unauthoriazted"});
  }
}