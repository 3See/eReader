'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

exports.getStudyReaders = function(req, res, next) {
	db.StudyReader.findAll({
		where: {
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

exports.getunassignedReaders = function(req, res, next) {
	var string = "SELECT readerID FROM etect_dev.reader WHERE etect_dev.reader.readerID NOT IN (SELECT readerID FROM etect_dev.StudyReader)";
	db.sequelize.query(string, { type: db.sequelize.QueryTypes.SELECT})
	.then(function(result){
		console.log(JSON.stringify(result));
		res.send(JSON.stringify(result));
	})
	.catch(function(err) {
		console.log('getunassignedreaders error : ' + err);
	});
};