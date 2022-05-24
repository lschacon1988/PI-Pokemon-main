const { Router } = require("express");
const { Pokemon, Types, type_pokemon } = require("../db.js");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getInfo = async () => {
  const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const algo = await axios.get(pokeApi.data.results[0].url);
  console.log('SOY alGO', algo.data)
  const resApi = await axios.get(pokeApi.data.next);
  const resApi2 = await axios.get(resApi.data.next);
  const allRes = pokeApi.data.results
    .concat(resApi.data.results)
    .concat(resApi2.data.results);
  return allRes;
};

getInfo();
const router = Router();

// router.get('/pokemons',async (req, res, next)=>{
//     const {name} = req.query
//     const apiPokemons = await getInfo()
// try {
//     let hay = await Pokemon.findAll();
//     console.log('SOY HAY', hay)
//     if(!hay.length) await Pokemon.bullkcreate(apiPokemons)
// } catch (error) {
//     console.log(error)
// }

// console.log('SOY POKE', apiPokemons)
// if(name){
//     try {

//         let poke = await Pokemon.findAll({
//             where:{
//                 name: name
//             }
//         })
//         return res.json(poke)

//     } catch (error) {
//         console.log(error)

//     }
// }
// })

module.exports = router;
