/*
 * Created by
 * Aravind Sundarrajan (B00824107)
 */

var search = require('../routes/search.js');

exports.getCategories = function (request, response) {
    search.getCategories(function (error, data) {
        if (error) {
            response.send(error);
        }
        console.log('res', data);
        response.send(data);
    });
};


exports.getBreeds = function (request, response) {
    search.getBreeds(function (error, data) {
        if (error) {
            response.send(error);
        }
        console.log('res', data);
        response.send(data);
    });
};

exports.getColors = function (request, response) {
    search.getColors(function (error, data) {
        if (error) {
            response.send(error);
        }
        console.log('res', data);
        response.send(data);
    });
};

exports.searchPets = function (request, response) {
    let breed = request.body.breed;
    let category = request.body.category;
    let color = request.body.color
    search.getPets(breed, category, color, (error, data) => {
        if (error) {
            response.send(error);
        } else {
            response.json(data);
        }
    });
};
