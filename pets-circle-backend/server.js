/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
// port = process.env.PORT || 3000;
port = process.env.PORT || 26678;
app.listen(port);

console.log('Server up on port: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var routes = require('./approutes');
routes(app); 