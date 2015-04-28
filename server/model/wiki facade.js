/**
 * Created by Dennnis on 28-04-2015.
 */

var mongoose = require('mongoose');
var db = require('./db');
var wiki = mongoose.model('wiki');
var all = [];

(function(){
    wiki.find("",function(err,data){
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
            callback(null,data);
        }
    })

}

function getCategories(callback) {

}

function getWikisWithCategory(category, callback) {
    //var all = null;
    var result = [];
    //wiki.find("",function(err,data){
    //    if(err){
    //        callback(err)
    //    }else{
    //        all = data;
    //    }
    //})
    for(var i = 0; i<all.length;i++){
        for(var j = 0;j<all[i].categories.length;j++){
            if(category == all[i].categories[j]){
                result.push(all[i].categories[j])
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