/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

//  Missing pets page

var Missing = require('../routes/Missing.js');

exports.fetchMissingPets = function(req, res) {
  Missing.fetchMissingPets(function(err, missing ) {  
        if (err)
        res.send(err);
        console.log('res', missing);
      res.send(missing);
    });
  };

  exports.filterMissingPets = function(req, res) {
    var breed = req.body.breed;
    var color = req.body.color;
    var desc = req.body.desc;
    
    console.log(req.body.desc);

    Missing.filterMissingPets(breed, color, desc, function(err, result) {
      console.log(req.body.breed);
           if (err)
              res.send(err);
      res.json(result);
    });
  };
