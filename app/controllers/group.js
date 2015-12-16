'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

// called from public\js\controllers\study-info.js
exports.getGroups = function(req, res, next) {
//	console.log("GetGroup req ========================");
//	console.log(req.body);
	db.studygroup.findAll({
		where: {
			studyID: req.body.study.id
		},
		attributes: ['studyGroupName', 'groupID']
	})
	.then(function(result){
//		console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));		
	})
	.catch(function(err){
		console.log('GetGroup error : ' + err);
	});
};

// called from: public\js\controllers\subject-setup.js
// SLIGHT DIFFERENCE BETWEEN THIS AND THE getGroups. EACH
// HAVE DIFFERENT INFORMATION PASSED IN. DON'T CONFUSE
// THEM AS DUPLICATE CODING
exports.getenrollGroups = function(req, res, next) {
	db.studygroup.findAll({
		where: {
			studyID: req.body.study
		},
		attributes: ['studyGroupName', 'groupID']
	})
	.then(function(result){
//		console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));		
	})
	.catch(function(err){
		console.log('GetGroup error : ' + err);
	});	
};