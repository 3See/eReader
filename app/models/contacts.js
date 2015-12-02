'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacts', {
    contactID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    middlename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suffix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maidenname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
