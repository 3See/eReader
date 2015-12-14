'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

exports.getGroups = function(req, res, next) {
	console.log("GetGroup req ========================");
	console.log(req.body);
	db.studygroup.findAll({
		where: {
			studyID: req.body.study.id
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