'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SubjectAddress', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    addressID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    addressType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    displayOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.SubjectAddress.belongsTo(models.subject, {foreignKey: "subjectID"});
        models.SubjectAddress.belongsTo(models.address, {foreignKey: "addressID"});
      }
    }
  });
};
