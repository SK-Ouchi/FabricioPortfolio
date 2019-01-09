var mongoose = require('mongoose');
mongoose.set('debug',true);
require('dotenv').config();
const dbRoute = process.env.MLAB_ROUTE;

mongoose.connect(dbRoute,{ useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Album = require('./album');