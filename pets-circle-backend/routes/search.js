/*
 * Created by
 * Aravind Sundarrajan (B00824107)
 */

var sql = require('../database/dbconfig.js');
var mysql = require('mysql');

//constructor
var search = function (searchObject) {

};


search.getCategories = function (response) {
    sql.query("select distinct category from pet", function (error, data) {
        if (error) {
            console.log("error: ", error);
            response(error, null);
        }
        else {
            response(null, data);
        }
    });
};
search.getBreeds = function (response) {
    sql.query("select distinct breed from pet", function (error, data) {
        if (error) {
            console.log("error: ", error);
            response(error, null);
        }
        else {
            response(null, data);
        }
    });
};

search.getPets = (breed, category, response) => {
    console.log('breed  ' + breed + 'category       ' + category)
    if (breed !== '' && category !== '') {
        sql.query("select * from pet where breed='" + breed + "' and category='" + category + "'", function (error, data) {
            if (error) {
                console.log("error: ", error);
                response(error, null);
            }
            else {
                response(null, data);
            }
        });
    }
    if (breed != '' && category == '') {
        sql.query("select * from pet where breed='" + breed + "'", function (error, data) {
            if (error) {
                console.log("error: ", error);
                response(error, null);
            }
            else {
                response(null, data);
            }
        });
    }
    if (breed === '' && category !== '') {
        console.log('**********')
        sql.query("select * from pet where category='" + category + "'", function (error, data) {
            if (error) {
                console.log("error: ", error);
                response(error, null);
            }
            else {
                response(null, data);
            }
        });
    }
}
module.exports = search;