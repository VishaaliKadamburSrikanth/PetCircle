var petdetails = require('../routes/postpets.js');

exports.postdetails = function (req, res) {

    console.log(req.body.pet_name);


    petdetails.postdetails(req, function (err, result) {
        if (err)
            res.send(err);



    });
}

exports.getpets = function (request, res) {
    petdetails.getpets(request.query['userId'], function (error, data) {

        if (error) {
            res.send(error);
        }


        res.send(data);
    });
};