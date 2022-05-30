import { GET_POKEMONS, NAME_POKEMON } from "../action/actionType";

const initialState = {
  pokemons:[],
  pokemonName: []
};

export default function pokemonReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case NAME_POKEMON:{
      return{   
        ...state,
        pokemonName: payload
      } 
    }

    default:
      return state;
  }
}
