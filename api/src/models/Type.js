const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('types', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: false});
};