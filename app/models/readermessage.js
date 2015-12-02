'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('readermessage', {
    readerMessageRecID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    rawSMSMessageRecID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    batteryVoltage: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    swVersion: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerRSSI: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerLowBattery: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    readerShutdown: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    readerRebooted: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    readerAtRest: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    readerInCharger: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    readerFullyCharged: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eventTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eventReason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    antennaConnected: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    antennaOnBody: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    heartbeatTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pillDetected: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    capStart: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capGI: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capTempID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capInLinkRSSI: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capTrialID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capPatientID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capEnd: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    capsuleRxCounter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    storedTime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
