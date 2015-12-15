'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');

/**
 * Register Subject
 */

exports.getStudy = function(req, res, next) {
//    console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
//    console.log(req);
    db.study.findAll({
        //when login is working, need to change hardcoded 1 to user's ID
        where: {customerID: req.body.uid},
        attributes: [
            'studyName',
            'studyID'
        ]
    })
    .then(function(result){
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
};
