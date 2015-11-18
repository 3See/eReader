/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    employeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    customerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    middlename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suffix: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
