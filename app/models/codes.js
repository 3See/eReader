/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codes', {
    codename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codevalue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codedesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    display_yn: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
