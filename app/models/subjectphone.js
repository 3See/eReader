'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subjectphone', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    phoneType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    areaCode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    phonenumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.subjectphone.belongsTo(models.subject, {foreignKey: "subjectID"});
      }
    }
  });
};
