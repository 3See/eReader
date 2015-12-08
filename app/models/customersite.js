'use strict';/* jshint indent: 2 */

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
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.customersite.belongsTo(models.customer, {foreignKey: "customerID"});
        models.customersite.belongsTo(models.site, {foreignKey: "siteID"});
      }
    }
  });
};
