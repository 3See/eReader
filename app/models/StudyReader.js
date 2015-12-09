'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyReader', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
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
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.StudyReader.belongsTo(models.study, {foreignKey: "studyID"});
        models.StudyReader.belongsTo(models.reader, {foreignKey: "readerID"});
      }
    }
  });
};
