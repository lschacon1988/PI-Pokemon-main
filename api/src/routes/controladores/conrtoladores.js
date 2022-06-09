const axios = require("axios");
const { Pokemon, Types, type_pokemon } = require("../../db.js");
const { getInfo, getDb, model, getType } = require("../service/index.js");
const { Op } = require("sequelize");


module.exports = {
    getAllPoke: async () => {
      let pokeApi = await getInfo();
      let pokeDb = await getDb();
      let all = pokeApi.concat(pokeDb);
      return all;
    },
  
    getName: async (name) => {
      try {
        name = name.toLowerCase();
        let pokeDb = await Pokemon.findAll({
          where: {
            name: { [Op.iLike]: name },
          },
          include: {
            model: Types,
            attributes: ["name"],
            // through:{
            //     attributes: []
            // }
          },
        });
  
        if (pokeDb.length) {
          return pokeDb;
        } else {
          const pokeName = await model(name);
          if (pokeName) {
            return pokeName;
          } else {
          }
        }
        return [{ msg: "Pokemon Not Found" }];
      } catch (error) {
        console.log(error);
      }
    },      
  
    creatType: async () => {
      let arrType = await getType();
      await arrType.forEach((e) => {
        Types.findOrCreate({
          where: { name: e },
        });
      });
      const allType = await Types.findAll();
      return allType;
    },
  
    pokeDetail: async (id) => {
      try {
        if (id.length > 8) {
          let idDb = await Pokemon.findAll({ where: { id: id } });
          if (idDb.length) {
            return idDb;
          }
        }
  
        const detali = await model(id);
  
        if (detali.length) return detali;
  
        return { msg: "Pokemon Not Found" };
      } catch (error) {
        // console.log(error);
      }
    },
  };