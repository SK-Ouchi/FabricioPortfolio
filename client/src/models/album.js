var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    albumNum:Number,
    albumName:String,
    type: {
        type: String,
        default: "All"
    },
    albumThumbnail: String,
    firstImage: {
            photoId: {
                type: Number,
                default: 0
            },
            photo:{
                type: String,
                default: "IMG_1"
            } 
        },
      albumImages: [{
        photoId :{
            type: Number,
            default: 0
        },
        photo: {
            type: String,
            default: "IMG_1"
        }
    }]
});

//Create model based on above schema
var Album = mongoose.model('Album', albumSchema);

//Export to use in different files
module.exports = Album;