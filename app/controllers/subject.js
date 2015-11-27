'use strict';

/**
 * Module dependencies.
 */
var sequelize = require('../models/subject');

/**
 * Auth callback
 */
exports.search = function(req, res, next) {
  sequelize.query("SELECT * FROM `subject`").then(function(subjects) {
      console.log(subjects);
  }); 
};
