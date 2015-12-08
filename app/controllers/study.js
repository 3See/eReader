'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');

/**
 * Register Subject
 */
var f_result = [];
//callback function parses the results from the db
function Parse(value, index, ar) {
    var r = JSON.stringify(value).split("\"");
    f_result[index] = r[3];
}

exports.getStudy = function(req, res, next) {
//    console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
//    console.log(req);
    db.study.findAll({
        //when login is working, need to change hardcoded 1 to user's ID
        where: {customerID: '2'},
        attributes: ['studyName']
    })
    .then(function(result){
        console.log(JSON.stringify(result));
        result.forEach(Parse);
        res.send(f_result);
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
};
