global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var User = mongoose.model("User");
var wiki = mongoose.model("wiki");

describe('REST API for /user', function () {
    //Start the Server before the TESTS
    before(function (done) {
        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error', function (err) {
                console.log(err);
            });
    })

    beforeEach(function (done) {
        wiki.remove({}, function () {
            var array = [{title: "test1", abstract: "test1", categories: ["test11", "test12"]}, {
                title: "test2",
                abstract: "test2",
                categories: ["test21", "test22"]
            }];
            wiki.create(array, function (err) {
                done();
            })
        })

    })

    after(function () {  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    })

    it("Should return a wiki with title, abstract and categories", function (done) {
        http.get("http://localhost:" + testPort + "/api/getWiki/:test1", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.title.should.equal("test1");
                n.abstract.should.equal("test1");
                done();
            });
        })
    });
});
