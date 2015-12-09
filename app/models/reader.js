'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader', {
    readerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    externalID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    swVersion: {
      type: 'DOUBLE',
      allowNull: true
    },
    readerType: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    readerStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    starttime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endtime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    areaCode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
