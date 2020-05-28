const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const http = require('http');
const cardService = require('./services/card.service');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//{"hand" : ["H1", "H2", "S3", "D3", "C3" ]}

app.get('/', (req, res, next) => {
    res.send('index');
});

app.post('/', (req, res) => {
    let hands = JSON.parse(JSON.stringify(req.body));
    console.log(hands);
    res.send(cardService.determineRank(hands));
});


http.createServer(app).listen(3000, () => {
    console.log('listening to port 3000!');
});

