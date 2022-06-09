const { Router } = require("express");
const { Pokemon, Types, type_pokemon } = require("../db.js");
const {
  getName,
  getAllPoke,
  pokeDetail,
  creatType,
} = require("./controladores/conrtoladores.js");
const getPokemon = require('./modelRoutes/getPokemon')


const router = Router();
router.use('/', getPokemon)

router.post("/pokemons", async (req, res, next) => {
  const { name, hp, types, attack, defense, speed, height, weight, img } =
    req.body;
  try {
    
    let newPoke = await Pokemon.create({
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
      img: img,
      createDb: true,
    });
    
    let dbType = await Types.findAll({
      where: { name: types },
    });
    newPoke.addTypes(dbType);
    res.json(newPoke);
  } catch (error) {
    next(error);
  }
});

router.get("/types", async (req, res, next) => {
  try {
    const type = await creatType();
    res.json(type);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
