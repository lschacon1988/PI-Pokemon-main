const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
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
    img:{
      type: DataTypes.STRING,
    },
    lifetime:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defending:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },


  });
};




// ID
// Name *
// Lifetime
// Strength
// Defending
// Velocity
// Height
// Weight