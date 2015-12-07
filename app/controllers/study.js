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
    console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
    var study = db.study.find({
        where: ["customerID = " + req.query.customerID]
    })
    .then(function(){
        console.log(JSON.stringify(study));
        res.send(JSON.stringify(study));
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
   // res.send(study);
};
