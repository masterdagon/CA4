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
            res.json(data);
        }
    })
});

router.get('/getWikisWithCategory/:category',function(req,res){
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" Database not available)");
        return;
    }
    var category = req.params.category;
    wikiFacade.findWiki(category,function(err,data){
        if(err){
            res.status(500);
            res.end("Error")
        }else{
            res.status(200);
            res.json(data);
        }
    })
});

router.get('/test',function(req,res){
    res.end('test');
})

module.exports = router;
