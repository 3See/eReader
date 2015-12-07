'use strict';

/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

var log = function(inst) {
    console.dir( inst.get() );
};

exports.search = function(req, res, next) {
    // set query parameter to wildcard if field not supplied
    var params = [req.query.sid, req.query.fname, req.query.lname];
    for (var i = 0, l = params.length; i < l; i++) {
        if( params[i] === undefined || params[i] === '') {
            params[i] = '%';
        }
    }

    var query_sid = "subjectID LIKE '" + params[0]+ "' AND ";
    var query_fname = "firstname LIKE '" + params[1] + "' AND ";
    var query_lname = "lastname LIKE '" + params[2] + "'";

    var query = query_sid + query_fname + query_lname;

    db.subject.findAll({where: [query]}).then(function(data) {
        data.forEach(log);
        if(data === {} ) { res.send("No results found"); } 
        else { res.send(data); }
    });
};
