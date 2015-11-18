/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendar', {
    CalendarDate: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    isworkday: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
