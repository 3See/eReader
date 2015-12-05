'use strict';

module.exports = function(app) {
// User Routes
var subject = require('../controllers/subject');

// User Routes
app.get('/subject/search', subject.search);

};
