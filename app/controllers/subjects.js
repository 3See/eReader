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

    db.subjectemail.find({ 
        where: {
            emailaddress: req.body.email
        }
    })
    .then(function(result){
        if(result) {
            console.log('Subject already exists');          
        }
        else {

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

            var contact1 = {
                lastname: req.body.r1lastname,
                firstname: req.body.r1firstname,
                middlename: req.body.r1middleinitial
            };

            var contact2 = {
                lastname: req.body.r2lastname,
                firstname: req.body.r2firstname,
                middlename: req.body.r2middleinitial
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
                var subjectphone1 = {
                    subjectID: subject.subjectID,
                    phoneType: 'Primary',
                    areaCode: req.body.areacode1,
                    phonenumber: req.body.phone1,
                    displayorder: 1
                };
                var subjectphone2 = {
                    subjectID: subject.subjectID,
                    phoneType: 'Secondary',
                    areaCode: req.body.areacode2,
                    phonenumber: req.body.phone2,
                    displayorder: 2
                };

                address = db.address.build(address);
                subjectemail = db.subjectemail.build(subjectemail);
                subjectphone1 = db.subjectphone.build(subjectphone1);
                //special cases
                if(subjectemail2.emailaddress !== undefined) {
                    console.log('subjectemail2: ' + subjectemail2.subjectID);
                    subjectemail2 = db.subjectemail.build(subjectemail2);
                    subjectemail2.save();
                }
                if(subjectphone2.phonenumber !== undefined && subjectphone2.areacode !== undefined) {
                    subjectphone2 = db.subjectphone.build(subjectphone2);
                    subjectphone2.save()
                    .catch(function(err){
                        console.log('subjectphone2 error : ' + err);
                    });
                }

                subjectemail.save()
                .catch(function(err){
                    console.log('subjectemail error : ' + err);
                });
                subjectphone1.save()
                .catch(function(err){
                    console.log('subjectphone1 error : ' + err);
                });
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
                    SubjectAddress.save()
                    .catch(function(err){
                        console.log('SubjectAddress error : ' + err);
                    });

                })
                .catch(function(err){
                    console.log('address error : ' + err);
                });

                contact1 = db.contacts.build(contact1);
                contact1.save()
                .then(function() {

                    var contactphone1 = {
                        contactID: contact1.contactID,
                        phonetype: 'Primary',
                        areacode:  req.body.contact_areacode1,
                        phonenumber: req.body.r1phone
                    };

                    var subjectcontact1 = {
                        subjectID: subject.subjectID,
                        contactID: contact1.contactID,
                        contactOrder: 1,
                        relationship: req.body.relation1
                    };

                    contactphone1 = db.contactphone.build(contactphone1);
                    subjectcontact1 = db.SubjectContact.build(subjectcontact1);
                    contactphone1.save()
                    .catch(function(err){
                        console.log('contactphone1 error : ' + err);
                    });
                    subjectcontact1.save()
                    .catch(function(err){
                        console.log('subjectcontact1 error : ' + err);
                    });
                })
                .catch(function(err){
                    console.log('contact1 error : ' + err);
                });
                contact2 = db.contacts.build(contact2);
                contact2.save()
                .then(function() {

                    var contactphone2 = {
                        contactID: contact2.contactID,
                        phonetype: 'Primary',
                        areacode:  req.body.contact_areacode2,
                        phonenumber: req.body.r2phone
                    };

                    var subjectcontact2 = {
                        subjectID: subject.subjectID,
                        contactID: contact2.contactID,
                        contactOrder: 2,
                        relationship: req.body.relation2
                    };

                    contactphone2 = db.contactphone.build(contactphone2);
                    subjectcontact2 = db.SubjectContact.build(subjectcontact2);
                    contactphone2.save()
                    .catch(function(err){
                        console.log('contactphone2 error : ' + err);
                    });
                    subjectcontact2.save()
                    .catch(function(err){
                        console.log('subjectcontact2 error : ' + err);
                    });
                })
                .catch(function(err){
                    console.log('contact2 error : ' + err);
                });

            })
            .catch(function(err){
                //should do something here.....
            });
        }
    })
    .catch(function(err){
        console.log('subject search error : ' + err);
    });


};

/**
 * Update Subject
 */
exports.update = function(req, res, next) {

    db.address.find({ where: {addressID: req.body.addressID} }).then(function(result) {
    if (result) { // if the record exists in the db
        result.updateAttributes({
        addressLine1: req.body.addressLine1,    
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        stateCode: req.body.state,
        zip: req.body.zip
            });
        }
    })
    .catch(function(err){
        console.log('address error : ' + err);
    });

    db.subject.find({ where: {subjectID: req.body.subjectID} }).then(function(result) {
    if (result) { // if the record exists in the db
        result.updateAttributes({
        title: req.body.title,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        middlename: req.body.middlename
            });
        console.log('subject update complete.');
        }
    })
    .catch(function(err){
        console.log('subject error : ' + err);
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