'use strict';

module.exports = function(app) {
// User Routes
var status = require('../controllers/status');

// User Routes
app.post('/subject/getstatus', status.getStatus);

app.post('/subject/getstatuscomplete', status.getStatusComplete);

app.post('/subject/getstatusincomplete', status.getStatusIncomplete);

};
