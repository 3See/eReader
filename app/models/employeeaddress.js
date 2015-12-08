'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeaddress', {
    employeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    addressID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    addressType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    displayOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.employeeaddress.belongsTo(models.employee, {foreignKey: "employeeID"});
        models.employeeaddress.belongsTo(models.address, {foreignKey: "addressID"});
      }
    }
  });
};
