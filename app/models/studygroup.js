'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studygroup', {
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
    studyGroupNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    studyGroupName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    studyGroupDesc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.studygroup.belongsTo(models.study, {foreignKey: "studyID"});
        models.studygroup.belongsTo(models.studygroup, {foreignKey: "groupID"});
      }
    }
  });
};
