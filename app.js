var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

// Just a regular website with index.html being the initial page

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

