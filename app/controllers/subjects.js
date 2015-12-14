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
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                age: req.body.age,
                customerID: 1
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

    db.address.find({ 
        where: {
            addressID: req.body.address.addressID
        } 
    })
    .then(function(result) {
    if (result) { // if the record exists in the db
        result.updateAttributes({
        addressLine1: req.body.address.street1,    
        addressLine2: req.body.address.street2,
        city: req.body.address.city,
        stateCode: req.body.address.state,
        zip: req.body.address.zip
            });
        }
    })
    .catch(function(err){
        console.log('address error : ' + err);
    });

    db.subject.find({ where: {subjectID: req.body.id} }).then(function(result) {
    if (result) { // if the record exists in the db
        result.updateAttributes({
        title: req.body.title,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        suffix: req.body.suffix,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age
            });
        console.log('subject update complete.');
        }
    })
    .catch(function(err){
        console.log('subject error : ' + err);
    });

    db.SubjectReader.find({
        where: {
            subjectID: req.body.id,
            studyID: req.body.studyID,
            groupID: req.body.groupID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                readerID: req.body.readerID,
                startDate: req.body.start,
                endDate: req.body.end
            });
        }
    })
    .catch(function(err) {
        console.log('update subjectreader err : ' + err);
    });

    db.subjectphone.find({ 
        where: {
            subjectID: req.body.id,
            phoneType: 'Primary'
        }
    })
    .then(function(result) {
        if (result) {
            result.updateAttributes({
                areaCode: req.body.phone1.areacode,
                phonenumber: req.body.phone1.phone
            });
        }
    })
    .catch(function(err) {
        console.log("update primary subjectphone err : " + err);
    });

    db.subjectphone.find({ 
        where: {
            subjectID: req.body.id,
            phoneType: 'Secondary'
        }
    })
    .then(function(result) {
        if (result) {
            result.updateAttributes({
                areaCode: req.body.phone2.areacode,
                phonenumber: req.body.phone2.phone
            });
        }
        else if(req.body.phone2.phone !== null && req.body.phone2.areacode !== null){
            var subjectphone = {
                subjectID: req.body.id,
                phoneType: 'Secondary',
                areaCode: req.body.phone2.areacode,
                phonenumber: req.body.phone2.phone,
                displayorder: 2
            };
            subjectphone = db.subjectphone.build(subjectphone);
            subjectphone.save()
            .catch(function(err) {
                console.log('add second phone err : ' + err);
            });
        }
    })
    .catch(function(err) {
        console.log("update secondary subjectphone err : " + err);
    });

    db.subjectemail.find({
        where: {
            subjectID: req.body.id,
            emailtype: 'Primary'
        }
    })
    .then(function(result) {
        if (result) {
            result.updateAttributes({
                emailaddress: req.body.email1
            });
        }
    })
    .catch(function(err) {
        console.log("update primary subjectemail err : " + err);
    });

    db.subjectemail.find({
        where: {
            subjectID: req.body.subjectID,
            emailtype: 'Secondary'
        }
    })
    .then(function(result) {
        if (result) {
            result.updateAttributes({
                emailaddress: req.body.email2
            });
        }
    })
    .catch(function(err) {
        console.log("update Secondary subjectemail err : " + err);
    });

    db.SubjectContact.find({
        where: {
            contactID: req.body.contact1.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                relationship: req.body.contact1.relationship
            });
        }
        else if(req.body.email2 !== null){
            var subjectemail = {
                subjectID: req.body.id,
                emailtype: 'Primary',
                emailaddress: req.body.email2
            };
            subjectemail = db.subjectemail.build(subjectemail);
            subjectemail.save()
            .catch(function(err){
                console.log('add secondary email err : ' + err);
            });
        }
    })
    .catch(function(err) {
        console.log('update primary subjectcontact err : ' + err);
    });

    db.SubjectContact.find({
        where: {
            contactID: req.body.contact2.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                relationship: req.body.contact2.relationship
            });
        }
    })
    .catch(function(err) {
        console.log('update secondary subjectcontact err : ' + err);
    });

    db.contacts.find({
        where: {
            contactID: req.body.contact1.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                lastname: req.body.contact1.lastname,
                firstname: req.body.contact1.firstname,
                middlename: req.body.contact1.middlename
            });
        }
    })
    .catch(function(err) {
        console.log('update primary contact err : ' + err);
    });

    db.contacts.find({
        where: {
            contactID: req.body.contact2.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                lastname: req.body.contact2.lastname,
                firstname: req.body.contact2.firstname,
                middlename: req.body.contact2.middlename
            });
        }
    })
    .catch(function(err) {
        console.log('update secondary contact err : ' + err);
    });

    db.contactphone.find({
        where: {
            contactID: req.body.contact1.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                areacode: req.body.contact1.areacode,
                phonenumber: req.body.contact1.phone
            });
        }
    })
    .catch(function(err) {
        console.log('update primary contactphone err : ' + err);
    });

    db.contactphone.find({
        where: {
            contactID: req.body.contact2.contactID
        }
    })
    .then(function(result) {
        if(result) {
            result.updateAttributes({
                areacode: req.body.contact2.areacode,
                phonenumber: req.body.contact2.phone
            });
        }
    })
    .catch(function(err) {
        console.log('update secondary contactphone err : ' + err);
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

//groupinfo.client.view=====================================================

exports.getSubjects = function(req, res, next) {
    var string = "SELECT subjectID, firstname, lastname FROM etect_dev.subject where etect_dev.subject.subjectID in (select subjectID from etect_dev.studysubject where etect_dev.studysubject.studyID = " + req.body.study.id + " and etect_dev.studysubject.groupID = " + req.body.group.id + ")";
    db.sequelize.query(string, { type: db.sequelize.QueryTypes.SELECT})
    .then(function(result){
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err){
        console.log('GetSubject error : ' + err);
    });
};

exports.unassignedSearch = function(req, res, next) {
    var string = "SELECT subjectID FROM etect_dev.subject WHERE customerID = " + 1 + " AND etect_dev.subject.subjectID NOT IN (SELECT subjectID FROM etect_dev.studysubject)";
    db.sequelize.query(string, { type: db.sequelize.QueryTypes.SELECT})
    .then(function(result){
        console.log("UnassignedSearch : " + JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err) {
        console.log('UnassignedSearch error : ' + err);
    });
};

exports.enroll = function(req, res, next) {
    console.log(req.body);

    var d = new Date();

    var studysubject = {
        studyID: req.body.study,
        subjectID: req.body.subject,
        groupID: req.body.group
    };

    var studyReader = {
        studyID: req.body.study,
        readerID: req.body.reader,
        allocatedDate: d
    };

    var subjectreader = {
        studyID: req.body.study,
        groupID: req.body.group,
        readerID: req.body.reader,
        subjectID: req.body.subject,
        startDate: req.body.start,
        endDate: req.body.end
    };

    studysubject = db.studysubject.build(studysubject);

    studyReader = db.StudyReader.build(studyReader);

    subjectreader = db.SubjectReader.build(subjectreader);

    studysubject.save()
    .catch(function(err) {
        console.log('studysubject save error : ' + err);
    });

    studyReader.save()
    .catch(function(err) {
        console.log('StudyReader save error : ' + err);
    });

    subjectreader.save()
    .catch(function(err) {
        console.log('subjectreader save error : ' + err);
    });

    db.reader.find({
        where: {
            readerID: req.body.reader
        }
    })
    .then(function(result){
        if(result) {
            result.updateAttributes({
                studyID: req.body.study,
                starttime: req.body.start,
                endtime: req.body.end,
                areaCode: req.body.areacode,
                phonenumber: req.body.phone
            })
            .then(function(data) {
                console.log('reader updated');
                res.send("Finished");
            })
            .catch(function(err){
                console.log('reader update error : ' + err);
            });
        }
    });
};

exports.getfullsubject = function(req, res, next) {
    var count = 0;
    var subject = {
        id: req.body.patient.id,
        title: null,
        firstname: null,
        middlename: null,
        lastname: null,
        suffix: null,
        gender: null,
        height: null,
        weight: null,
        age: null,
        readerID: null,
        studyID: req.body.study.id,
        groupID: req.body.group.id,
        start: null,
        end: null,
        address: {
            addressID: null,
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null
        },
        phone1: {
            areacode: null,
            phone: null
        },
        phone2: {
            areacode: null,
            phone: null
        },
        email1: null,
        email2: null,
        contact1: {
            contactID: null,
            relationship: null,
            firstname: null,
            middlename: null,
            lastname: null,
            areacode: null,
            phone: null
        },
        contact2: {
            contactID: null,
            relationship: null,
            firstname: null,
            middlename: null,
            lastname: null,
            areacode: null,
            phone: null
        }
    };

    db.subject.find({
        where: {
            subjectID: req.body.patient.id
        }
    })
    .then(function(result){
        subject.title = result.title;
        subject.firstname = result.firstname;
        subject.middlename = result.middlename;
        subject.lastname = result.lastname;
        subject.suffix = result.suffix;
        subject.gender = result.gender;
        subject.height = result.height;
        subject.weight = result.weight;
        subject.age = result.age;
        count++;
        if(count === 11) {
            res.send(subject);
        }
       
    })
    .catch(function(err){
        console.log('Full subject info err : ' + err);
    });

    db.SubjectReader.find({
        where: {
            subjectID: req.body.patient.id,
            studyID: req.body.study.id,
            groupID: req.body.group.id
        }
    })
    .then(function(result){
        if(result !== null) {
            subject.readerID = result.readerID;
            subject.start = result.startDate;
            subject.end = result.endDate;
        }
        count++;
        if(count === 11) {
            res.send(subject);
        }

    })
    .catch(function(err){
        console.log('Full subject reader err : ' + err);
    });

    var string1 = "SELECT * FROM etect_dev.address where etect_dev.address.addressID in (select addressID from etect_dev.SubjectAddress where etect_dev.SubjectAddress.subjectID = " + req.body.patient.id + ")";
    db.sequelize.query(string1,  { type: db.sequelize.QueryTypes.SELECT})
    .then(function(result) {
        result = result[0];
        subject.address.addressID = result.addressID;
        subject.address.street1 = result.addressLine1;
        subject.address.street2 = result.addressLine2;
        subject.address.city = result.city;
        subject.address.state = result.stateCode;
        subject.address.zip = result.zip;
        count++;
        if(count === 11) {
            res.send(subject);
        }
        
    })
    .catch(function(err) {
        console.log('Full subject address err : ' + err);
    });

    db.subjectphone.find({
        where: {
            subjectID: req.body.patient.id,
            phoneType: 'Primary'
        }
    })
    .then(function(result) {
        subject.phone1.areacode = result.areaCode;
        subject.phone1.phone = result.phonenumber;
        count++;
        if(count === 11) {
            res.send(subject);
        }
        
    })
    .catch(function(err) {
        console.log('Full suject primary phone err : ' + err);
    });

    db.subjectphone.find({
        where: {
            subjectID: req.body.patient.id,
            phoneType: 'Secondary'
        }
    })
    .then(function(result) {
        if (result !== null) {
            subject.phone2.areacode = result.areaCode;
            subject.phone2.phone = result.phonenumber;
        }   
        count++;
        if(count === 11) {
            res.send(subject);
        }
        
    })
    .catch(function(err) {
        console.log('Full suject secondary phone err : ' + err);
    });

    db.subjectemail.find({
        where: {
            subjectID: req.body.patient.id,
            emailtype: 'Primary'
        }
    })
    .then(function(result) {
        subject.email1 = result.emailaddress;
        count++;
        if(count === 11) {
            res.send(subject);
        }
        
    })
    .catch(function(err) {
        console.log('Full suject primary email err : ' + err);
    });

    db.subjectemail.find({
        where: {
            subjectID: req.body.patient.id,
            emailtype: 'Secondary'
        }
    })
    .then(function(result) {
        if (result !== null) {
            subject.email2 = result.emailaddress;
        }
        count++;
        if(count === 11) {
            res.send(subject);
        }

        
    })
    .catch(function(err) {
        console.log('Full subject secondary email err : ' + err);
    });

    db.SubjectContact.find({
        where: {
            subjectID: req.body.patient.id,
            contactOrder: 1
        }
    })
    .then(function(result) {
        subject.contact1.relationship = result.relationship;
        subject.contact1.contactID = result.contactID;
        var string2 = "SELECT * FROM etect_dev.contacts, etect_dev.contactphone where etect_dev.contacts.contactID = " + result.contactID + " and etect_dev.contactphone.contactID = " + result.contactID + ";";
        db.sequelize.query(string2, { type: db.sequelize.QueryTypes.SELECT})
        .then(function(result){
            result = result[0];
            subject.contact1.firstname = result.firstname;
            subject.contact1.middlename = result.middlename;
            subject.contact1.lastname = result.lastname;
            subject.contact1.areacode = result.areacode;
            subject.contact1.phone = result.phonenumber;
            count++;
            if(count === 11) {
                res.send(subject);
            }

        })
        .catch(function(err) {
            console.log('Full subject primary contact inner err : ' + err);
        });
        count++;
        if(count === 11) {
            res.send(subject);
        }

    })
    .catch(function(err) {
        console.log('Full subject primary contact outer err : ' + err);
    });

    db.SubjectContact.find({
        where: {
            subjectID: req.body.patient.id,
            contactOrder: 2
        }
    })
    .then(function(result) {
        subject.contact2.relationship = result.relationship;
        subject.contact2.contactID = result.contactID;
        var string2 = "SELECT * FROM etect_dev.contacts, etect_dev.contactphone where etect_dev.contacts.contactID = " + result.contactID + " and etect_dev.contactphone.contactID = " + result.contactID + ";";
        db.sequelize.query(string2, { type: db.sequelize.QueryTypes.SELECT})
        .then(function(result){
            result = result[0];
            subject.contact2.firstname = result.firstname;
            subject.contact2.middlename = result.middlename;
            subject.contact2.lastname = result.lastname;
            subject.contact2.areacode = result.areacode;
            subject.contact2.phone = result.phonenumber;
            count++;
            if(count === 11) {
                res.send(subject);
            }

        })
        .catch(function(err) {
            console.log('Full subject secondary contact inner err : ' + err);
        });
        count++;
        if(count === 11) {
            res.send(subject);
        }
    })
    .catch(function(err) {
        console.log('Full subject secondary contact outer err : ' + err);
    });

};
