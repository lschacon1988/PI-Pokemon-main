const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,  //data.id
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, //data.name
      allowNull: false,
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER, // stats[0].base_stat
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER, // stats[2].base_stat
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER, // stats[5].base_stat
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER, //data.height
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER, //data.weight
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING, //data.sprites.other.home.front_default
    },
    mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
