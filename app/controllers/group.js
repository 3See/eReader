'use strict';

var _ = require('lodash');
var db = require('../../config/sequelize');

var f_result = [];
//callback function parses the results from the db
function ParsegetGroup(value, index, ar) {
    var r = JSON.stringify(value).split("\"");
    f_result[index] = r[3];
}

exports.getGroups = function(req, res, next) {
	db.studygroup.findAll({
		where: {
			studyID: '1'
		},
		attributes: ['studyGroupName']
	})
	.then(function(result){
		console.log(JSON.stringify(result));
        result.forEach(ParsegetGroup);
        res.send(f_result);		
	})
	.catch(function(err){
		console.log('GetGroup error : ' + err);
	});
};