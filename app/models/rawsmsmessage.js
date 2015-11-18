/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rawsmsmessage', {
    rawSMSMessageRecID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    receiveTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    smsMessage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    storedTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fromReader: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
