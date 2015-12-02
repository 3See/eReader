/* jshint indent: 2 */
'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bmirange', {
    minBMI: {
      type: 'DOUBLE',
      allowNull: false
    },
    maxBMI: {
      type: 'DOUBLE',
      allowNull: false
    },
    Status: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
};
