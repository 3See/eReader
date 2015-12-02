'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doses', {
    dosename: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    dosedesc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dosecount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
