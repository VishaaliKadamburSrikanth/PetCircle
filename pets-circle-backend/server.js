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
class TokenGenerator {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({ username: username },
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }
    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}


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
let handlers = new TokenGenerator();
app.post('/login', handlers.login);

app.get('/', auth.checkToken, handlers.index);
var routes = require('./approutes');
routes(app);




