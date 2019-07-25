/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

module.exports = function (app) {
  var controller = require('./controller/appController');
  const searchController = require('./controller/searchController');
  console.log("into app routes")

  // Cors handling
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Routes to missing pets page
  app.route('/missing')
    .get(controller.fetchMissingPets)
    .post(controller.filterMissingPets);
  /**
   * Search functionality
   */
  app.route('/getCategories')
    .get(searchController.getCategories)

  app.route('/getBreeds')
    .get(searchController.getBreeds)
  app.route('/getPets')
    .post(searchController.searchPets)
};
