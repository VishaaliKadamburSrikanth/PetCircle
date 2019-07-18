// <!--
//  Created by
//  Karan Gill( B00757467)
//CODE REF AS WELL AS IDEA: TEAMMATES
// -->
//  Mutualmatchpets page

var MutualMatch = require('../routes/MutualMatch.js');

exports.fetchMutualMatchPets = function(req, res) {
  MutualMatch.fetchMutualMatchPets(function(err, mutualmatch ) {  
        if (err)
        res.send(err);
        console.log('res', mutualmatch);
      res.send(mutualmatch);
    });
  };

  exports.filterMutualMatchPets = function(req, res) {
    var breed = req.body.breed;
    var color = req.body.color;
    var desc = req.body.desc;
    
    console.log(req.body.desc);

    MutualMatch.filterMutualMatchPets(breed, color, desc, function(err, result) {
      console.log(req.body.breed);
           if (err)
              res.send(err);
      res.json(result);
    });
  };
