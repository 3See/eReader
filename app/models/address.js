/* jshint indent: 2 */
'use strict';

var sequelize = require('../../config/sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    addressID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stateCode: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zipplus: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
