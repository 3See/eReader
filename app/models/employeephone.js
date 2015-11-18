/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeephone', {
    employeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phonetype: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    areacode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
