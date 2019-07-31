/*
 * Created by
 * Sai charan reddy (B00757467)
 * CODE REF AS WELL AS IDEA: TEAMMATES
 * Taken the code from teamates as reference to maintain consistency in the application
 */

var sql = require('../database/dbconfig.js');
var mysql = require('mysql');

var postpet = function (postpet) {
    this.created_at = new Date();
};

var q = "";
postpet.postdetails = function (req, res) {
    console.log("entered")

    sql.query("insert into web.pet (pet_name,age,description,gender,category,color,breed,image,pet_owner_id) values('" + req.body.pet_name + "','" + req.body.pet_age + "','" + req.body.pet_description + "','" + req.body.pet_gender + "','partner','" + req.body.pet_color + "','" + req.body.pet_breed + "','" + req.body.imageUrl + "'," + req.body.owner_id + ")", function (err, result) {
        if (err) {
            res.send(500, "Query error");
            console.log(err);
        } else {
            console.log("connected1");


        }

    });
}
postpet.getpets = function (userId, response) {
    sql.query("select * from pet where pet_owner_id= " + userId, function (error, data) {
        if (error) {
            console.log("error: ", error);
            response(error, null);
        }
        else {
            response(null, data);
        }
    });
};


module.exports = postpet;