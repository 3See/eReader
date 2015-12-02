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
  });
};
