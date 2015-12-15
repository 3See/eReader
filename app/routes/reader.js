'use strict';

module.exports = function(app) {
	var reader = require('../controllers/reader');

	//Get the readers of x study route
	app.post('/reader/getStudyReaders', reader.getStudyReaders);

	//Get all readers route
	app.post('/reader/getReaders', reader.getReaders);

	//Get all unassigned readers route
	app.post('/reader/getunassignedReaders', reader.getunassignedReaders);
};
