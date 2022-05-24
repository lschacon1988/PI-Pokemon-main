const axios = require("axios");

module.exports;
{
  getPoke = async () => {
    const poke = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return poke.data.results;
  };
}
