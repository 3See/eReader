'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studysite', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  });
};
