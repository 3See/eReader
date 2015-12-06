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

    var subject = {
        title: req.body.title,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        suffix: req.body.suffix,
        maidenname: req.body.maidenname,
        gender: req.body.gender
    };

    var address = {
        addressLine1: req.body.streetaddress1,
        addressLine2: req.body.streetaddress2,
        city: req.body.city,
        stateCode: req.body.state,
        zip: req.body.zipcode
    };

    var message = null;
    subject = db.subject.build(subject);
    subject.save()
    //synchronize
    .then(function() {

        console.log('New Subject (local) : {' +
            'id: ' + subject.subjectID +
            ' firstname: ' + subject.firstname +
            ' lastname: ' + subject.lastname +
            ' }');
        console.log('New Emails : {' +
            'subjectID: ' + subject.subjectID +
            ' emailtype: Primary' +
            ' emailaddress: ' + req.body.email +
            ' emailtype: Secondary' +
            ' emailaddress: ' + req.body.email2);

        var subjectemail = {
            subjectID: subject.subjectID,
            emailtype: 'Primary',
            emailaddress: req.body.email
        };
        var subjectemail2 = {
            subjectID: subject.subjectID,
            emailtype: 'Secondary',
            emailaddress: req.body.email2
        };

        address = db.address.build(address);
        subjectemail = db.subjectemail.build(subjectemail);

        //special cases
        if(req.body.email2 !== undefined) {
            console.log('subjectemail2: ' + subjectemail2.subjectID);
            subjectemail2 = db.subjectemail.build(subjectemail2);
            subjectemail2.save();
        }

        subjectemail.save();
        address.save()    
        //synchronize
        .then(function() {

            //logs
            console.log('New address : {' +
                'subjectid: ' + subject.subjectID +
                ' addressID: ' + address.addressID +
                ' addresstype: Primary');

            //models to var
            var SubjectAddress = {
                subjectID: subject.subjectID,
                addressID: address.addressID,
                addressType: 'Primary'
            };

            //synch to db
            SubjectAddress = db.SubjectAddress.build(SubjectAddress);

            //save
            SubjectAddress.save();

        })
        .catch(function(err){
            console.log("address error : " + err);
        });
        
    })
    .catch(function(err){
        //should do something here.....
    });
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
