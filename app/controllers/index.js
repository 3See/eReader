'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');


// Setup Index, Views handled by UI Router in public/js/routes/
exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
