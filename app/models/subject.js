'use strict';
/* jshint indent: 2 */

var sequelize = require('../../config/sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    subjectID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    middlename: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    suffix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maidenname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    height: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    age: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.subject.belongsTo(models.customer, {foreignKey: "customerID"});
      }
    }
  });
};
