'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');

/**
 * Register Subject
 */
exports.register = function(req, res, next) {
    var message = null;
    var subject = db.subject.build(req.body);

    subject.provider = 'local';
    console.log('New Subject (local) : {' +
        'id: ' + subject.subjectID +
        ' firstname: ' + subject.firstname +
        ' lastname: ' + subject.lastname +
        ' }');

    subject.save();
};

/**
 * Auth callback
 */
exports.registerCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Send Subject
 */
exports.me = function(req, res) {
    res.jsonp(req.subject || null);
};

/**
 * Test if subject exists, by given name & email
 */
exports.subject = function(req, res, next, lastName, firstName, email) {
    db.Subject.find({ where :
        {
            lastname: lastName,
            firstname: firstName
        }
    }).then(function(subject){
        if (subject) {
            return next(new Error('Subject ' + subject.subjectID));
        }
        req.profile = subject;
        next();
    }).catch(function(err){
        next(err);
    });
};
