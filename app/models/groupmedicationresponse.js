'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmedicationresponse', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    responseNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    messageSource: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messageType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    respondTo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messageID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    messageDelay: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
