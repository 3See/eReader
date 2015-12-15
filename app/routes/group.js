'use strict';

module.exports = function(app) {
	var group = require('../controllers/group');

	// Get the groups
	app.post('/group/getGroups', group.getGroups);
};
