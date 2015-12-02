'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmedicationreminder', {
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
    reminderNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    reminderTime: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    reminderType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reminderCondition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messageID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
