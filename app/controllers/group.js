'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

exports.getGroups = function(req, res, next) {
	db.studygroup.findAll({
		where: {
			studyID: '1'
		},
		attributes: ['studyGroupName', 'groupID']
	})
	.then(function(result){
		console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));		
	})
	.catch(function(err){
		console.log('GetGroup error : ' + err);
	});
};