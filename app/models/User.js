'use strict';/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebookUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    twitterUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    twitterKey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twitterSecret: {
      type: DataTypes.STRING,
      allowNull: true
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true
    },
    openId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
