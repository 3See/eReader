'use strict';

/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

var log = function(inst) {
    console.dir( inst.get() );
};

exports.search = function(req, res, next) {
  var sid = '2000';

  db.subject.findAll({where: {subjectID : sid}})
      .then(function(posts) {
          posts.forEach(log);
      });
};
