/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

 var sql = require('../database/dbconfig.js');
 var mysql = require('mysql');

 var Post = function(post){
    
    };


Post.postPets = function (req, result) {

    console.log("into post missing pets page");
    var name = req.body.name;
    var breed = req.body.breed;
    var gender = req.body.gender;
    var color = req.body.color;
    var phoneno = req.body.phoneno;
    var email = req.body.email;
    var desc = req.body.desc;
    var age = req.body.age;
    var annual_income = req.body.annual_income;
    var category = req.body.category;
    var own_pet = req.body.own_pet;
    var care = req.body.care;
    var image = req.body.image;
         
    var insertQuery = "insert into pet (pet_name,breed,age,gender,color,phoneno,email,description,category,annual_income,own_pet,care,image) values (?,?,?,?,?,?,?,?,?,?,?,?,?)"
    
    sql.query(insertQuery, [name,breed,age,gender,color,phoneno,email,desc,category,annual_income,own_pet,care,image], function (err, res) {             
            if(err) {   
                console.log("[mysql error]",err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};


module.exports= Post;