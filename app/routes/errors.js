'use strict';

module.exports = function(app) {
  var errors = require('../controllers/errors');

  // Define error pages
  app.route('/server-error').get(errors.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(errors.renderNotFound);
};
