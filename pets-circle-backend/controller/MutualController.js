var MutualMatch = require('../routes/MutualMatch.js');


exports.fetchMutualMatchPets = function(req, res) {
  MutualMatch.fetchMutualMatchPets(function(err, mutual ) {  
        if (err){
            res.send(err);
            console.log("error");
        }
        console.log('res', mutual);
      res.send(mutual);
    });
  };