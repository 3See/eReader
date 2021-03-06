'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var _         = require('lodash');
var config    = require('./config');
var winston   = require('./winston');
var db        = {};


winston.info('Initializing Sequelize...');

// create your instance of sequelize

// If you are running anything but a MYSQL DB you must edit from here
var sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql',
  storage: config.db.storage,
  logging: config.enableSequelizeLog === 'true' ? winston.verbose : false,
  define: {
      timestamps: false,
      freezeTableName: true
  }
});

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(config.modelsDir)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  // import model files and save model names
  .forEach(function(file) {
    winston.info('Loading model file ' + file);
    var model = sequelize.import(path.join(config.modelsDir, file));
    db[model.name] = model;
  });

// invoke associations on each of the models
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
     db[modelName].associate(db); // For all models that have 'associate' method for class methods, run the key association
 }
});



// Synchronizing any model changes with database.
// WARNING: this will DROP your database everytime you re-run your application
sequelize
  .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true}) // Removes key constraints on DB allowing for DROP
  .then(function() {
    sequelize.sync({force: config.FORCE_DB_SYNC==='true', logging:config.enableSequelizeLog==='true' ? winston.verbose : false});
  })
  .then(function() {
        winston.info("Database "+(config.FORCE_DB_SYNC==='true'?"*DROPPED* and ":"")+ "synchronized"); // Log the process
    }).catch(function(err){
        winston.error("An error occured: %j",err);
    }, function(){
      sequelize
    .query('SET FOREIGN_KEY_CHECKS = 1'); // Re-init all keys on the DB
  });



// assign the sequelize variables to the db object and returning the db.
module.exports = _.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
