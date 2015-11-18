/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subjectemail', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    emailtype: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailaddress: {
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
