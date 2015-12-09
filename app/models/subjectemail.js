'use strict';/* jshint indent: 2 */

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
      allowNull: true
    }
  }, {
    classMethods: {
      // Creates an association function that is run AFTER all the models are loaded into sequelize.
      associate: function (models) {
        models.subjectemail.belongsTo(models.subject, {foreignKey: "subjectID"});
      }
    }
  });
};
