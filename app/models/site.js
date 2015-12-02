'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('site', {
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    siteName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addressLine1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addressLine2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stateCode: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zipplus: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
