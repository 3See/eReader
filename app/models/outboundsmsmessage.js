'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outboundsmsmessage', {
    outboundSMSMessageRecID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    phoneNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    storedTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    processed: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sentTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scheduledTime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
