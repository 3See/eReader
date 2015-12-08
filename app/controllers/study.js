'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');

/*
exports.getStudy = function(req, res) {
    request.get(
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
                var obj = JSON.parse(body); //changing format to exact Json Obj
                res.json(obj);
            }
        }
    )
    res.json(req.studyName);
    
    
};
*/
console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
exports.getStudy = function(req, res) {

    console.log('------------GETTING THE CONSOLE LOG TO WORK---------');
    db.study.find({ 
        where: {
            customerID: 1
        }
    })
    .then(function(result){
        res.json(result);
        
    })
    .catch(function(err){
        console.log('subject search error : ' + err);
    });


};

/**
 * Register Subject
 */
