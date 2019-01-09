const express = require('express');
var router = express.Router();
var helpers = require("../helpers/albums");
var db = require('../models');

// db.once("open", () => console.log("connected to the database"));
  
// // checks if connection with the database is successful
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

router.route('/')
    .get(helpers.getAlbums)
    .post(helpers.createAlbum)

router.route('/:albumId')
    .get(helpers.showAlbum)
    .put(helpers.updateAlbum)
    .delete(helpers.deleteAlbum);

module.exports = router;



  

  
