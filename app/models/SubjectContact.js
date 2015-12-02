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
      allowNull: false
    },
    contactOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
