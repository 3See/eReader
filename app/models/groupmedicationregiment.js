/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmedicationregiment', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    medicationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sequenceNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ingestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minIngestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    maxIngestionTime: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
