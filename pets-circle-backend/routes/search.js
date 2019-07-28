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
    sql.query("select distinct category from pet where category !='missing'", function (error, data) {
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
search.getColors = function (response) {
    sql.query("select distinct color from pet", function (error, data) {
        if (error) {
            console.log("error: ", error);
            response(error, null);
        }
        else {
            response(null, data);
        }
    });
};

search.getPets = (breed, category, color, response) => {
    console.log('breed  ' + breed + 'category       ' + category + 'color ' + color)
    console.log('**********')
    let query = "select * from pet where breed='" + breed + "' and category='" + category + "' and color='" + color + "'"
    console.log(query);
    sql.query(query, function (error, data) {
        if (error) {
            console.log("error: ", error);
            response(error, null);
        }
        else {
            response(null, data);
        }
    });
}
module.exports = search;