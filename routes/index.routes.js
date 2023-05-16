const express = require('express');
const router = express.Router();

const User = require('../models/User.model');

/* GET home page */
router.get("/", (req, res, next) => {
  User.findOne()
  .then(resp => {
    res.render("index");
  })
  .catch(err =>next(err))
});

module.exports = router;
