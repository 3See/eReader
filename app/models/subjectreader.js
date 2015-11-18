/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subjectreader', {
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
  });
};
