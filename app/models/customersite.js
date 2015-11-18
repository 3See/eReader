/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customersite', {
    customerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  });
};
