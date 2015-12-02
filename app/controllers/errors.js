'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');


/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('404', {
        error: 'Page not found!'
      });
    },
    'application/json': function () {
      res.json({
        error: 'Page not found!'
      });
    },
    'default': function () {
      res.send('Page not found!');
    }
  });
};
