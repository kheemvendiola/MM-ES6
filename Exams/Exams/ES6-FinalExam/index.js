var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname + '/public'));

app.get((res, req) => {
    app.render('index');
});

http.createServer(app).listen(3000, () => {
    console.log('listening to port 3000!');
});