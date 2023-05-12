const express = require("express");
const { register } = require("../Controllers/User.Controller");
const router = express.Router();

router.post('/register',register)

module.exports = router