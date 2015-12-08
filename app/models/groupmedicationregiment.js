'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmedicationregiment', {
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
    medicationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ingestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minIngestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    maxIngestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.groupmedicationregiment.belongsTo(models.study, {foreignKey: "studyID"});
        models.groupmedicationregiment.belongsTo(models.studygroup, {foreignKey: "groupID"});
        models.groupmedicationregiment.belongsTo(models.medications, {foreignKey: "medicationID"});
      }
    }
  });
};
