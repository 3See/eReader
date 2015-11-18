/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nextkey', {
    keyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    keyvalue: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
