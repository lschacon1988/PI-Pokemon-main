const { Router } = require("express");
const { Pokemon, Types, type_pokemon } = require("../db.js");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getInfo = async () => {
  try {
    const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const resApi = await axios.get(pokeApi.data.next);
    const resApi2 = await axios.get(resApi.data.next);
    const allRes = pokeApi.data.results
      .concat(resApi.data.results)
      .concat(resApi2.data.results);
    const allPoke = await Promise.all(
      allRes.map(async (e) => {
        let p = await axios(e.url);
        return {
            id: p.data.id,
          name: p.data.name,
          hp: p.data.stats[0].base_stat, 
          // stats[0].base_stat
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
      console.log(error)
  }
};

const getName = async (name) =>{
    try {
     if(name){
          const namePoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
          console.log('SOY NAME',namePoke)
          return namePoke
         }
    } catch (error) {
        console.log(error)
    }

}

getName("bulbasaur")

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
