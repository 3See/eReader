'use strict';

module.exports = function(app) {
	var reader = require('../controllers/reader');

	app.post('/reader/getStudyReaders', reader.getStudyReaders);

	app.post('/reader/getReaders', reader.getReaders);

	app.post('/reader/getunassignedReaders', reader.getunassignedReaders);
};