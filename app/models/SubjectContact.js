'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SubjectContact', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    contactID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    contactOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.SubjectContact.belongsTo(models.subject, {foreignKey: "subjectID"});
        models.SubjectContact.belongsTo(models.contacts, {foreignKey: "contactID"});
      }
    }
  });
};
