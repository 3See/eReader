'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vitals', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    observationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    accessTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    heartRate: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    o2sat: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    systolicBP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    diastolicBP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    meanBP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  });
};
