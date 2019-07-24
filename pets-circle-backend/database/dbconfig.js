/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

// Database configs

var mysql = require('mysql');


var connection = mysql.createPool({
  host: "dalcloud.mysql.database.azure.com",
  user: "aravind@dalcloud",
  password: "password@123",
  database: "web"
});

module.exports = connection;