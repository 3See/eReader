'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyEmployee', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    employeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    studyRole: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.StudyEmployee.belongsTo(models.study, {foreignKey: "studyID"});
        models.StudyEmployee.belongsTo(models.employee, {foreignKey: "employeeID"});
      }
    }
  });
};
