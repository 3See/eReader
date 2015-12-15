'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var db = require('../../config/sequelize');

/**
 * Populate State Lists
 */

exports.populate = function(req, res, next) {
    var query_input_pkg = req.body;
    console.log("Request Body*****************");
    console.log(query_input_pkg);

    var state_list_pkg = {
        study_list: {},
        group_list: {},
        patient_list: {}
    };

    // Populate Studies List
    db.study.findAll({
        where: { customerID: query_input_pkg.uid },
        attributes: ['studyID','studyName']
    })
    .then(function(result) {
        state_list_pkg.study_list = result;
        // Populate Group List
            if(query_input_pkg.states.study.id === null) {
                query_input_pkg.states.study.id = '%';
            }
            
            if(query_input_pkg.states.group.id === null) {
                query_input_pkg.states.group.id = '%';
            }         
            var string = "select groupID, studyGroupName from etect_dev.studygroup where etect_dev.studygroup.studyID like '" + query_input_pkg.states.study.id + "'";
            db.sequelize.query(string, {type: db.sequelize.QueryTypes.SELECT})
            .then(function(result){
                // Set group list
                state_list_pkg.group_list = result;

                // Populate Patient List
                var query = "SELECT subjectID, firstname, lastname FROM subject NATURAL JOIN studysubject" +
                            " WHERE studyID LIKE '" + query_input_pkg.states.study.id +
                            "' AND groupID LIKE '" + query_input_pkg.states.group.id + "'";

                db.sequelize.query(query, {type: db.sequelize.QueryTypes.SELECT})
                .then(function(result){
                    // Set patient list
                    state_list_pkg.patient_list = result;


                        console.log('Query sucessful***************************');
                        console.log(state_list_pkg);

                        // Send response to Current Service
                        res.send(state_list_pkg);
                })
                .catch(function(err){
                    console.log('Get patient list error : ' + err);
                });
            })
            .catch(function(err){
                console.log('Get group list error : ' + err);
            });
    })
    .catch(function(err){
        console.log('Get study list error : ' + err);
    });
    
};

