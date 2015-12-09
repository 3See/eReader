'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingestionevent', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ingestionNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    eventTime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.ingestionevent.belongsTo(models.study, {foreignKey: "studyID"});
        models.ingestionevent.belongsTo(models.subject, {foreignKey: "subjectID"});
      }
    }
  });
};
