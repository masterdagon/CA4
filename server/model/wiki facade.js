/**
 * Created by Dennnis on 28-04-2015.
 */

var mongoose = require('mongoose');
var db = require('./db');
var wiki = mongoose.model('wiki');
var all = [];

(function(){
    wiki.find({},function(err,data){
        if(err){
        }else{
            all = data;
        }
    })
})();

function getWiki(title, callback) {
    callback
}

function findWiki(searchString, callback) {
    wiki.find({title: searchString},function(err,data){
        if(err){
            callback(err);
        }else{
            var result = [];
            for(var i=0;i<data.length;i++){
                var titleabstract = {title:data[i].title,abstract:data[i].abstract};
                result.push(titleabstract);
            }
            callback(null,result);
        }
    })

}

function getCategories(callback) {

}

function getWikisWithCategory(category, callback) {
    //var all = null;
    var result = [];
    var wikisites = all;
    //wiki.find({},function(err,data){
    //    if(err){
    //        callback(err)
    //    }else{
    //        all = data;
    //    }
    //})
    for(var i = 0; i<wikisites.length;i++){
        for(var j = 0;j<wikisites[i].categories.length;j++){
            if(category == wikisites[i].categories[j]){
                var titleabstract = {title: wikisites[i].title,abstract:wikisites[i].abstract};
                result.push(titleabstract);
            }
        }
    }
    callback(null,result);
}

module.exports = {
    getWiki: getWiki,
    findWiki: findWiki,
    getWiki: getWiki,
    getCategories: getCategories,
    getWikisWithCategory: getWikisWithCategory
}