var mongoose = require('mongoose');
mongoose.set('debug',true);
const dbRoute = "mongodb://skouchi:mdb123@ds261479.mlab.com:61479/fabriciocr";

mongoose.connect(dbRoute,{ useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Album = require('./album');