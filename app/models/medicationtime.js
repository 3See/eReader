/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicationtime', {
    medicationTime: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
