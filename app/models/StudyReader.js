'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyReader', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    allocatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    returnedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });
};
