
var sql = require('../database/dbconfig.js');
var mysql = require('mysql');



var signin = function(signin){
    this.created_at = new Date();
 };

 signin.signin= function(req,res) {
    console.log(req.body.firstname)
       
    sql.query("insert into web.user (first_name,last_name,mailid,password) values('"+req.body.firstname+"','"+ req.body.lastname+"','"+req.body.email+"','"+req.body.password+"')", function (err, result) {
       if(err){
       res.send(500,"Query error");
       console.log(err);
       }else{
       console.log("connected1");
       
      
       }
       
     });
     }
     
     
     

     module.exports=signin;