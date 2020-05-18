var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var formData = [];
var first = '';
var second = '';
var third = '';

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', function (req, res) {
    res.sendFile('ranking_tool.html', { root: __dirname });
});


app.post('/', function (req, res) {
    formData.push([req.body['inputContestant'], parseInt(req.body['inputScore'], 10)]);
    res.redirect(req.originalUrl);

});

app.get('/winners', function (req, res) {
   
        assign();
        res.render(__dirname + "/winners.html", { first: first, second: second, third: third });
    
});


function assign() {

    var sortedArr = formData.sort(function (a, b) {
        return b[1] - a[1]
    });


    const groupedMap = sortedArr.reduce(
        (entryMap, e) => entryMap.set(e[1], [...entryMap.get(e[1]) || [], e]),
        new Map()
    );

    var keys = [...groupedMap.keys()];

    for (var i = 0; i <= 2; i++) {


        var count = groupedMap.get(keys[i]).length;

        if (count > 1) {
            switch (i) {
                case 0:
                    first = '(1st) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 1:
                    second = '(2nd) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 2:
                    third = '(3rd) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

            }
        }
        else {
            switch (i) {
                case 0:
                    first = '(1st) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 1:
                    second = '(2nd) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 2:
                    third = '(3rd) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

            }

        }


    }

}


app.listen(3000, function () {
    console.log('listening at port 3000');
})

