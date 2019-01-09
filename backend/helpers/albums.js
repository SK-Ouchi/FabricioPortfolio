var db = require('../models');

exports.getAlbums = (function(req,res){
    db.Album.find()
    .then(function(album){
        res.json(album);
    })
    .catch(function(err){
        res.send(err);
    })
 });
 
 exports.createAlbum = function(req,res){
     //create new entry in db whereas req.body is the object being created
     db.Album.create(req.body)
     //return the newTodo and display it
     .then(function(newAlbum){
         res.status(201).json(newAlbum)
     })
     .catch(function(err){
         res.send(err);
     })
 };
 
 
 exports.showAlbum = (function(req,res){
     db.Album.findById(req.params.albumId)
     .then(function(foundAlbum){
         res.json(foundAlbum)
     })
     .catch(function(err){
         res.send(err);
     })
 });
 
 exports.updateAlbum = function(req,res){
     //Find the id of the object and update it, respond with the new updated todo
     db.Album.findOneAndUpdate({_id: req.params.AlbumId},req.body, {new:true})
     .then(function(updateAlbum){
         res.json(updateAlbum);
     })
     .catch(function(err){
         res.send(err);
     })
 };
 
 exports.deleteAlbum = function(req,res){
     //remove by the id
     db.Album.remove({_id: req.params.albumId})
     .then(function(){
         //return an object saying the object was deleted
         res.json({message: 'deleted'})
     })
     .catch(function(err){
         res.send(err);
     })
 };