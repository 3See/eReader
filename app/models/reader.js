/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader', {
    readerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    externalID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    swVersion: {
      type: 'DOUBLE',
      allowNull: false
    },
    readerType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerStatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    starttime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endtime: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
