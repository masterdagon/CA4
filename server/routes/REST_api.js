var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var wikiFacade = require('../model/wiki facade');

/* GET A User From The DataBase */
router.get('/getWiki/:title', function(req, res) {
    console.log('title is: '+req.params.title)
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" database not available)");
        return;
    }else{
        console.log('title is: '+req.params.title)
        wikiFacade.getWiki(req.params.title,function(err,site){
            if (err) {
                res.status(err.status || 400);
                res.end(JSON.stringify({error: err.toString()}));
                return;
            }
            res.header("Content-type","application/json");
            res.end(JSON.stringify(site));
        });
    }
});

router.get('/getCategories', function(req, res) {
    console.log('test')
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" database not available)");
        return;
    }else{
        wikiFacade.getCategories(function(err,cat){
            if (err) {
                res.status(err.status || 400);
                res.end(JSON.stringify({error: err.toString()}));
                return;
            }
            res.header("Content-type","application/json");
            res.end(JSON.stringify(cat));
        });
        }
});

module.exports = router;
