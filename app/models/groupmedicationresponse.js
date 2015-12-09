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
      allowNull: false,
      primaryKey: true
    },
    messageDelay: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.groupmedicationresponse.belongsTo(models.study, {foreignKey: "studyID"});
        models.groupmedicationresponse.belongsTo(models.studygroup, {foreignKey: "groupID"});
        models.groupmedicationresponse.belongsTo(models.message, {foreignKey: "messageID"});
      }
    }
  });
};
