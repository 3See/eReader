/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('managementcontacts', {
    studyid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    phonenumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  });
};
