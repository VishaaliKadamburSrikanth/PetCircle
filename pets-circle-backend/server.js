/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const auth = require('./auth');
let jwt = require('jsonwebtoken');
let config = require('./secret');
var sql = require('./database/dbconfig.js');
var mysql = require('mysql');
var results1 = [];
class TokenGenerator {
    login(req, res) {
        var username = req.body.email;
        var password = req.body.password;
        // For the given username fetch user from DB
        sql.query("select user_id,mailid,password from web.user where mailid='" + req.body.email + "' ", function (err, rows) {
            let token;
            if (err) {
                throw err;
            }
            else {
                if (username && password && rows.length > 0) {
                    if (username === rows[0].mailid && password === rows[0].password) {
                        token = jwt.sign({ username: username },

                            config.secret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }

                        );
                        console.log(token)
                        console.log(rows[0])
                        // return the JWT token for the future API calls
                        res.json({
                            message: 'Authentication successful!',
                            token: token,
                            success: true,
                            id: rows[0].user_id
                        });
                    }
                }
                else {
                    res.json({
                        message: 'Authentication failed',

                        success: false,

                    });
                }
            }
        });



    }
    index(req, res) {
        console.log("entered"),
            res.json({

                success: true,
                message: 'Index page'
            });

        console.log(res);

    }
}


port = process.env.PORT || 3000;
//port = process.env.PORT || 26678;
app.listen(port);

console.log('Server up on port: ' + port);

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
let handlers = new TokenGenerator();
app.post('/login', handlers.login);

app.get('/', handlers.index);
var routes = require('./approutes');
routes(app);




