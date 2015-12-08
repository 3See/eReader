'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contactphone', {
    contactID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
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
      allowNull: true
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.contactphone.belongsTo(models.contacts, {foreignKey: "contactID"});
      }
    }
  });
};
