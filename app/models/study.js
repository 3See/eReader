'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    customerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    studyName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endDate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redCapInterface: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redCapToken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redCapAPIURL: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redCapDayOrCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
