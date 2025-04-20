const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // use provided templateing engine and return that template.
  res.render('shop');
});

module.exports = router;
