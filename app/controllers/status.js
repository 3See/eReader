'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');


var f_result = [];
//callback function parses the results from the db
/**
 * Register Subject
 */
exports.getStatus = function(req, res, next) {
    db.sequelize.query('select distinct study.studyID as studyID, study.studyName as studyName,  sub.subjectID as subjectID, gr.studyGroupName as studyGroupName, ph.areaCode as areaCode, ph.phonenumber as phonenumber, re.readerID as readerID, re.startDate as startDate, re.endDate as endDate from etect_dev.study study join etect_dev.studysubject studysub on study.studyID = studysub.studyID left join etect_dev.studygroup gr on gr.groupID = studysub.groupID left join etect_dev.subject sub on studysub.subjectID = sub.subjectID left join etect_dev.subjectphone ph on ph.subjectID = sub.subjectID left join etect_dev.SubjectReader re on re.subjectID = sub.subjectID left join etect_dev.ingestionevent eve on eve.subjectID = sub.subjectID where study.customerID = 2 group by sub.subjectID', {type: db.sequelize.QueryTypes.SELECT})
    .then(function(result){
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
        
};

exports.getStatusComplete = function(req, res, next) {
    db.sequelize.query('select distinct study.studyID as studyID, study.studyName as studyName,  sub.subjectID as subjectID, gr.studyGroupName as studyGroupName, ph.areaCode as areaCode, ph.phonenumber as phonenumber, re.readerID as readerID, re.startDate as startDate, re.endDate as endDate from etect_dev.study study join etect_dev.studysubject studysub on study.studyID = studysub.studyID left join etect_dev.studygroup gr on gr.groupID = studysub.groupID left join etect_dev.subject sub on studysub.subjectID = sub.subjectID left join etect_dev.subjectphone ph on ph.subjectID = sub.subjectID left join etect_dev.SubjectReader re on re.subjectID = sub.subjectID left join etect_dev.ingestionevent eve on eve.subjectID = sub.subjectID where study.customerID = 2 and not readerID is null and not studyGroupName is null group by sub.subjectID', {type: db.sequelize.QueryTypes.SELECT})
    .then(function(result){
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
        
};

exports.getStatusIncomplete = function(req, res, next) {
    db.sequelize.query('select distinct study.studyID as studyID, study.studyName as studyName,  sub.subjectID as subjectID, gr.studyGroupName as studyGroupName, ph.areaCode as areaCode, ph.phonenumber as phonenumber, re.readerID as readerID, re.startDate as startDate, re.endDate as endDate from etect_dev.study study join etect_dev.studysubject studysub on study.studyID = studysub.studyID left join etect_dev.studygroup gr on gr.groupID = studysub.groupID left join etect_dev.subject sub on studysub.subjectID = sub.subjectID left join etect_dev.subjectphone ph on ph.subjectID = sub.subjectID left join etect_dev.SubjectReader re on re.subjectID = sub.subjectID left join etect_dev.ingestionevent eve on eve.subjectID = sub.subjectID where study.customerID = 2 and (readerID is null or studyGroupName is null) group by sub.subjectID', {type: db.sequelize.QueryTypes.SELECT})
    .then(function(result){
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
    .catch(function(err){
        console.log('getstudy error : ' + err);
    });
        
};