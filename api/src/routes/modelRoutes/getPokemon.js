const { Router } = require("express");
const { getName, getAllPoke, pokeDetail } = require("../controladores/conrtoladores");

const router = Router();

router.get("/pokemons", async (req, res, next) => {
    const { name } = req.query;
    try {
      if (name) {
        let p = await getName(name);
        return res.json(p);
      } else {
        let allPoke = await getAllPoke();
        return res.json(allPoke);
      }
    } catch (error) {
      next(error);
    }
  });
  router.get("/pokemons/:idPokemon", async (req, res, next) => {
    const { idPokemon } = req.params;
    try {
      let p = await pokeDetail(idPokemon);  
      if (p) return res.json(p);
    } catch (error) {
      next(error);
    }
});

  module.exports= router