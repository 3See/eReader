'use strict';

/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

var log = function(inst) {
    console.dir( inst.get() );
};

exports.search = function(req, res, next) {
    // set query parameter to wildcard if not supplied
    for (var i in req.query) {
        if (req.query[i] == '' || req.query[i] == null)
            req.query[i] = '%'; 
    }

    db.subject.findAll({ where: ["subjectID LIKE '" + req.query.sid + "' AND firstname LIKE '"+req.query.fname+"'"]
    }).then(function(posts) {
        posts.forEach(log);
    });
};
