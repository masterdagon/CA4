/**
 * Created by Dennnis on 28-04-2015.
 */

var mongoose = require('mongoose');
var db = require('./db');
var wiki = mongoose.model('wiki');

function getWiki(title,callback){
    wiki.findOne({title: title}, function (err, wikisite) {
        if (err) {
            callback(err)
        } else {
            callback(null,wikisite)
        }


    })
}

function findWiki(searchString,callback){

}

function getCategories(callback){
    var categoryList
    var uniqueList
    wiki.find({},function (err, wikisites){
        if (err) {
            callback(err)
        } else {
            for(var i=0;i<wikisites.length;i++){
                templist = wikisites[i].categories
                for(var j=0;j<templist.length;j++){
                    categoryList.push(templist[j])
                }

            }
            uniqueList=categoryList.filter(function(cat){
                var exist=false
                for(var i=0;i<uniqueList.length;i++){
                    if(uniqueList[i]==cat){
                        exist = true
                    }
                }
                    if(!exist){
                        return cat
                    }
            })
    }
        return uniqueList
    })
}

function getWikisWithCategory(category,callback){

}

module.exports = {
    getWiki: getWiki,
    findWiki: findWiki,
    getWiki: getWiki,
    getCategories: getCategories,
    getWikisWithCategory: getWikisWithCategory
}