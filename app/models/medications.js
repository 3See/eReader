/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medications', {
    medicationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    studyMedNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    medicationName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dosage: {
      type: 'DOUBLE',
      allowNull: false
    },
    doseUOM: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doseForm: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doseFrequency: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
