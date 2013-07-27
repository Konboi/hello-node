var IP_ADDRESS = "localhost";
var PORT = 1337;
var startServer = function () {
    console.log("server runnring at http://" + IP_ADDRESS + ":" + PORT + "/");
    console.log("Server Stop: Ctrl+c");
}
/*
 * Load Module
 */
var http = require("http");

/*
 * Create Server
 */
var server = http.createServer();
server.on("request", function (req, res) {
  console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello world!: URL " + req.url);
});


server.listen(PORT, IP_ADDRESS, startServer);

