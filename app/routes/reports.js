'use strict';

module.exports = function(app) {
// User Routes
var reports = require('../controllers/reports');

// User Routes
app.post('/subject/getreports', reports.getReports);


};
