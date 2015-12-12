'use strict';

module.exports = function(app) {
    // Current State Routes
    var current = require('../controllers/current');

    /*
     * Subject Routes
     */

    // Register New Subjects
    app.post('/current/populate', current.populate);

};

