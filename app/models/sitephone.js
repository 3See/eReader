'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitephone', {
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    phoneType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    areaCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
