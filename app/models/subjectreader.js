'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SubjectReader', {
    studyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    readerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    startDate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endDate: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.SubjectReader.belongsTo(models.subject, {foreignKey: "subjectID"});
        models.SubjectReader.belongsTo(models.reader, {foreignKey: "readerID"});
      }
    }
  });
};
