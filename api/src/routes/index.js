const { Router } = require("express");
const { Pokemon, Types, type_pokemon } = require("../db.js");
const axios = require("axios");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getInfo = async () => {
  try {
    const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const resApi = await axios.get(pokeApi.data.next);
    const allRes = pokeApi.data.results.concat(resApi.data.results);
    const allPoke = await Promise.all(
      allRes.map(async (e) => {
        let p = await axios(e.url);
        return {
          id: p.data.id,
          name: p.data.name,
          hp: p.data.stats[0].base_stat,
          // stats[0].base_stat
          types: p.data.types.map((e) => e.type.name),
          attack: p.data.stats[1].base_stat,
          // stats[1].base_stat
          defense: p.data.stats[2].base_stat,
          // stats[2].base_stat
          speed: p.data.stats[5].base_stat,
          // stats[5].base_stat
          height: p.data.height,
          //data.height
          weight: p.data.weight,
          //data.weight
          img: p.data.sprites.other.home.front_default,
          //data.sprites.other.home.front_default
        };
      })
    );

    return allPoke;
  } catch (error) {
    console.log(error);
  }
};

const getDb = async () => {
  try {
    const dataDbPoke = await Pokemon.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dataDbPoke;
  } catch (error) {
    console.log(error);
  }
};

const getAllPoke = async () => {
  let pokeApi = await getInfo();
  let pokeDb = await getDb();
  let all = pokeApi.concat(pokeDb);
  return all;
};

const getName = async (name) => {
  try {
    name = name.toLowerCase();
    let pokeDb = await Pokemon.findAll({ where: { name: name } });

    if (pokeDb.length) {
      return pokeDb;
    } else {
      const pokeName = await model(name);
      if (pokeName) {
        let arrPokeName = [];
        arrPokeName.push(pokeName);
        return arrPokeName;
      } else {
        return { msg: "Pokemon Not Found" };
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const model = async (data) => {
  try {
    const modelo = await axios(`https://pokeapi.co/api/v2/pokemon/${data}`);
    if (modelo) {
      const pokeModel = {
        id: modelo.data.id,
        name: modelo.data.name,
        hp: modelo.data.stats[0].base_stat,
        types: modelo.data.types.map((e) => e.type.name),
        attack: modelo.data.stats[1].base_stat,
        defense: modelo.data.stats[2].base_stat,
        speed: modelo.data.stats[5].base_stat,
        height: modelo.data.height,
        weight: modelo.data.weight,
        img: modelo.data.sprites.other.home.front_default,
      };
      return pokeModel;
    }
  } catch (error) {
    //  console.log(error);
  }
};

const getType = async () => {
  const result = await axios("https://pokeapi.co/api/v2/type");
  const type = result.data.results.map((e) => e.name);
  return type;
};

const creatType = async () => {
  let arrType = await getType();
  await arrType.forEach((e) => {
    Types.findOrCreate({
      where: { name: e },
    });
  });

  return arrType;
};

const pokeDetail = async (id) => {
  try {
    if (id.length > 8) {
      let idDb = await Pokemon.findAll({ where: { id: id } });
      if (idDb.length) {
        return idDb;
      }
    }

    let arrDetali = [];
    const detali = await model(id);
    arrDetali.push(detali);

    if (arrDetali.length) return arrDetali;

    return { msg: "Pokemon Not Found" };
  } catch (error) {
    // console.log(error);
  }
};

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

router.post("/pokemons", async (req, res, next) => {
  const { name, hp, types, attack, defense, speed, height, weight, img } =
    req.body;

  try {
    let newPoke = await Pokemon.create({
      name: name,
      hp: hp,
      types: types,
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
    res.json({ msg: "Pokemon creado" });
  } catch (error) {
    next(error);
  }
});

router.get("/types", async (req, res, next) => {
  try {
    const t = await creatType();
    console.log("esto es t", t);
    const type = await Types.findAll();
    res.json(t);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
