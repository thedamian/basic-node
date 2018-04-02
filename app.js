var http = require("http"); // setup the basic http connections

var express = require("express"); // express is a library is the defacto library for building a web server. with routing, and inteligence for https and many other "web server things"

var app = express(); // Connect the basic http library to the fancy express library

var port = process.env.PORT || 5000; // we'll use this variable to tell the server to start on the "normal developer port" of 5000 (anything under 1024 like port 80 is usually limited.

// Just a regular website with index.html being the initial page

app.use(express.static(__dirname + "/")); // Do some express magic. This just tells the system to look locally for all files being requested as if they were local. it's smart enough to not allow you to look up app.js (this file)

var server = http.createServer(app); // Start express

server.listen(port); // Point it to the port we defined above.

// DONE! You have a full "node" web server that will serve ANY website with with 1,000,000 files all located locally.

