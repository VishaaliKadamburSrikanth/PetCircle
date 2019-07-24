/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

var sql = require('../database/dbconfig.js');
var mysql = require('mysql');

//constructor
var Missing = function(missing){
    sql.connect(function(err) {
    console.log("connected");
    if (err) throw err});
};


// Default missing pets page 
Missing.fetchMissingPets = function (result) {
       
            sql.query("SELECT * FROM pet where category='missing'", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else
                    result(null, res);
              
                }
        );        
};


// Filter selection for missing pets page 
Missing.filterMissingPets = function (breed,color,desc, result) {
    
    console.log("into filter search of missing pets");
    var filterQuery = "SELECT * FROM pet WHERE category='missing' AND (breed = ? OR color = ? OR description like '%" + desc + "%')";

    mysql.escape
    sql.query(filterQuery, [breed,color], function (err, res) {             
            if(err) {   
               result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   

      };


module.exports= Missing;