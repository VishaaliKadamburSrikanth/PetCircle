var sql = require('../database/dbconfig.js');
var mysql = require('mysql');
var MutualMatch = function(mutual){
    sql.connect(function(err) {
    if (err){
        console.log("error")
    } 
});
};

MutualMatch.fetchMutualMatchPets = function (result) {
            sql.query("SELECT * FROM pet where pet_id IN (SELECT pet2_id FROM pet_mutual_match where pet1_id = 1)", function (err, res) {             
                if(err) {
                    console.log("ERROR IN QUERY: ");
                }
                else
                    result(null, res);
                }
        );        
};

module.exports= MutualMatch;