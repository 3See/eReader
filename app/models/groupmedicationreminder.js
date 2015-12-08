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
      allowNull: false,
      primaryKey: true
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.groupmedicationreminder.belongsTo(models.study, {foreignKey: "studyID"});
        models.groupmedicationreminder.belongsTo(models.studygroup, {foreignKey: "groupID"});
        models.groupmedicationreminder.belongsTo(models.message, {foreignKey: "messageID"});
      }
    }
  });
};
