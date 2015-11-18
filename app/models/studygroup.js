/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studygroup', {
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
    studyGroupNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    studyGroupName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    studyGroupDesc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
