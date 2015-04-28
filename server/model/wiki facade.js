/**
 * Created by Dennnis on 28-04-2015.
 */

var mongoose = require('mongoose');
var db = require('./db');
var wiki = mongoose.model('wiki');

function getWiki(title,callback){
    callback
}

function findWiki(searchString,callback){

}

function getWiki(title,callback){

}

function getCategories(callback){

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