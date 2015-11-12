'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');


exports.render = function(req, res) {
    res.render('index.jade', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
