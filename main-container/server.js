const express = require("express");
const app = express();
const port = 9000;
var rp = require('request-promise');

var options = {
    method: 'GET',
    uri: 'http://localhost:3000'
}

app.get("/", (req, res) => {
    rp(options).then(function (body) {
        res.json(JSON.parse(body))
    }).catch(function (err) {
        console.log(err);
    });
})

app.listen(port, () => {
    console.log('Server listening on port ', port);
})