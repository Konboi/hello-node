var IP_ADDRESS = "localhost";
var PORT = 1337;

var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello, world! \n");
}).listen(PORT, IP_ADDRESS, function () {
    console.log("server runnring at http://" + IP_ADDRESS + ":" + PORT + "/");
    console.log("Server Stop: Ctrl+c");

});
