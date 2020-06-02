const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const ranking_tool = require('./public/ranking_tool');

var formData = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);


app.get('/', (req, res, next) => {
    res.sendFile('ranking_tool.html', { root: __dirname + '/public' });
});

app.post('/', (req, res) => {
    formData.push([req.body['inputContestant'], parseInt(req.body['inputScore'], 10)]);
    res.redirect(req.originalUrl);

});

app.get('/winners', (req, res) => {
    var f, s, t;

    ranking_tool.getWinners(formData, (res) => {

        f = res.f;
        s = res.s;
        t = res.t;

    })

    res.render(__dirname + "/public/winners.html", { first: f, second: s, third: t });

});



app.listen(3000, function () {
    console.log('listening at port 3000!');
})

