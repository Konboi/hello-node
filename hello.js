var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello, world! \n");
}).listen(1337, "localhost", function () {
    console.log("server runnring at http://localhost:1337");
    console.log("Server Stop: Ctrl+c");
});
