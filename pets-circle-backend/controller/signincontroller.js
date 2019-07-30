var signin = require('../routes/signin.js');
//var login=require('../routes/login.js');

exports.signin=function(req, res){
    
    console.log(req.body.pet_name);


    signin.signin(req,function(err, result) {  
   

    
  
});
}
