'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

// Get Readers asscociated with Study
// Called from: Nowhere
exports.getStudyReaders = function(req, res, next) {
	db.StudyReader.findAll({
		where: {
			//=======HARD CODED======
			//WILL NEED TO BE REPLACED
			//WITH PASSED IN VALUE IF
			//EVER NEEDED
			studyID: '1'
		},
		attributes: ['readerID']
	})
	.then(function(result){
		console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
	})
	.catch(function(err){
		console.log('GetStudyReaders error : ' + err);
	});
};

// Get All Readers
// Called from: public\js\controllers\subject-setup.js
exports.getReaders = function(req, res, next) {
	db.reader.findAll()
	.then(function(result){
		console.log(JSON.stringify(result));
		res.send(JSON.stringify(result));
	})
	.catch(function(err){
		console.log('getReaders error : ' + err);
	});
};

// Get Readers with no assigned Study
// Called from: public\js\controllers\subject-setup.js
exports.getunassignedReaders = function(req, res, next) {
	var string = "SELECT readerID FROM etect_dev.StudyReader WHERE etect_dev.StudyReader.studyID = " + req.body.study + " AND etect_dev.StudyReader.readerID NOT IN (SELECT readerID FROM etect_dev.SubjectReader WHERE etect_dev.SubjectReader.studyID = " + req.body.study + ")";
	db.sequelize.query(string, { type: db.sequelize.QueryTypes.SELECT})
	.then(function(result){
		console.log(JSON.stringify(result));
		res.send(JSON.stringify(result));
	})
	.catch(function(err) {
		console.log('getunassignedreaders error : ' + err);
	});
};
