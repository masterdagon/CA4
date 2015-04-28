var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var wikifacade = require("../model/wiki facade");

/* GET A User From The DataBase */
router.get('/user', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  user.find({}, function (err, users) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(users));
  });
});

router.get('/findWiki/:title',function(req,res){
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" Database not available)");
        return;
    }
    var title = req.params.title;
    wikifacade.findWiki(title,function(err,data){
        if(err){
            res.status(500);
            res.end("Error")
        }else{
            res.status(200);
            res.end(data);
        }
    })
});

module.exports = router;
