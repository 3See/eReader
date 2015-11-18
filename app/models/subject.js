/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    subjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastname: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    middlename: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    suffix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maidenname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    height: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    age: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};
