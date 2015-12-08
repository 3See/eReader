'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SubjectMedicationRegiment', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    medicationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ingestionDOW: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ingestionTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.SubjectMedicationRegiment.belongsTo(models.subject, {foreignKey: "subjectID"});
        models.SubjectMedicationRegiment.belongsTo(models.studygroup, {foreignKey: "groupID"});
        models.SubjectMedicationRegiment.belongsTo(models.medications, {foreignKey: "medicationID"});
      }
    }
  });
};
