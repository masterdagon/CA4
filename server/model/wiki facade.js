/**
 * Created by Dennnis on 28-04-2015.
 */

var mongoose = require('mongoose');
var db = require('./db');
var wiki = mongoose.model('wiki');
var all = [];

(function () {
    wiki.find({}, function (err, data) {
        if (err) {
        } else {
            all = data;
        }
    })
})();

function getWiki(title, callback) {
    wiki.findOne({title: title}, function (err, wikisite) {
        if (err) {
            callback(err)
        } else {
            callback(null, wikisite)
        }


    })
}
//needs to be case insensitive!
function findWiki(searchString, callback) {
    console.log("findwiki running. searchString: " + searchString);
    wiki.find({title: { "$regex": searchString, "$options": "i" }}, function (err, data) {
        if (err) {
            callback(err);
        } else {
            console.log('this is the data: '+data)
            var result = [];
            for (var i = 0; i < data.length; i++) {
                var titleabstract = {title: data[i].title, abstract: data[i].abstract};
                result.push(titleabstract);
            }
            callback(null, result);
        }
    })

}

function getCategories(callback) {
    var categoryList = [];
    var uniqueList = [];
    var wikisites = all;
    for (var i = 0; i < wikisites.length; i++) {
        templist = wikisites[i].categories
        for (var j = 0; j < templist.length; j++) {
            categoryList.push(templist[j])
        }

    }
    var uniqueList = categoryList.filter(function (site, pos) {
        return categoryList.indexOf(site) == pos;
    });
    callback(null, uniqueList);
}

function getWikisWithCategory(category, callback) {
    console.log("getWikisWithCategory running. category: " + category)
    var result = [];
    var wikisites = all;
    for (var i = 0; i < wikisites.length; i++) {
        for (var j = 0; j < wikisites[i].categories.length; j++) {
            if (category == wikisites[i].categories[j]) {
                var titleabstract = {title: wikisites[i].title, abstract: wikisites[i].abstract};
                result.push(titleabstract);
            }
        }
    }
    callback(null, result);
}

module.exports = {
    getWiki: getWiki,
    findWiki: findWiki,
    getCategories: getCategories,
    getWikisWithCategory: getWikisWithCategory
}