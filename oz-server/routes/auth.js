const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const controllerAuth = require("../controller/auth");

router.post('/signin', controllerAuth.signin);
router.post('/signup', controllerAuth.signup)

module.exports = router;