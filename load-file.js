var IP_ADDRESS = "localhost";
var PORT = 1337;

/*
 * Load Module
 */
var fs = require("fs");
var http = require("http");
var util = require("util");

/*
 * Load Local Data
 */
(function test() {
    fs.readFile("./testdata", "utf8", function (err, data) {
        console.log("read File");
        console.log(data);
    });

    console.log("readFile end");

    for (var i = 0, len = 1000; i< len; i++ ) {
        util.print(".");
    };
})();
