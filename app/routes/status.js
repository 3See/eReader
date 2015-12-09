'use strict';

module.exports = function(app) {
// User Routes
var status = require('../controllers/status');

// User Routes
app.post('/subject/getstatus', status.getStatus);

};
