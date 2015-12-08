'use strict';

module.exports = function(app) {
	var group = require('../controllers/group');

	app.post('group/getGroups', group.getGroups);
};