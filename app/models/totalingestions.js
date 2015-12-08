'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('totalingestions', {
    ingestionCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.totalingestions.belongsTo(models.study, {foreignKey: "studyID"});
        models.totalingestions.belongsTo(models.subject, {foreignKey: "subjectID"});
      }
    }
  });
};
