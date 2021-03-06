var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

http.createServer(app).listen(3000, () => {
    console.log("Listening on port 3000!")
});
