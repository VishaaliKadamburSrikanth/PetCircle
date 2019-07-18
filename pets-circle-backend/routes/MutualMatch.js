/*
 * Created by
 * Karan Gill (B00757467)
 * CODE REF AS WELL AS IDEA: TEAMMATES
 */

var sql = require('../database/dbconfig.js');
var mysql = require('mysql');

//constructor
var MutualMatch = function(mutualmatch){
   this.created_at = new Date();
};


// Default mutualmatch pets page 
MutualMatch.fetchMutualMatchPets = function (result) {
        sql.query("SELECT * FROM pet where pet_id IN (SELECT pet2_id where pet2_is = 1)", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else
                    result(null, res);
              
                }
        );   
};


// Filter selection for mutualmatch pets page 
MutualMatch.filterMutualMatchPets = function (breed,color,desc, result) {
    console.log("into filter search of missing pets");
    var filterQuery = "SELECT * FROM pet where pet_id IN (SELECT pet2_id where pet2_is = 1) AND (breed = ? OR color = ? OR description like '%" + desc + "%')";

    mysql.escape
    sql.query(filterQuery, [breed,color], function (err, res) {             
            if(err) {   
               ;
                console.log("[mysql error]",err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


module.exports= MutualMatch;