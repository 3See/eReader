'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    messageID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    messageType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messageDesc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    predefined: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
