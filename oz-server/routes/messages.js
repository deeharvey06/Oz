const express = require("express");
const router = express.Router({mergeParams: true});
const db = require("../models");
const controller = require("../controller/messages");

router.post('/', controller.createMessage);

module.exports = router;