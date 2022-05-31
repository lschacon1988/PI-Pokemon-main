import { GET_POKEMONS, NAME_POKEMON } from "../action/actionType";

const initialState = {
  pokemons:[],
  pokemonAll:[]
};

export default function pokemonReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_POKEMONS: {
      return {
        ...state, 
        pokemonAll: payload,       
        pokemons: payload,
      };
    }
    case NAME_POKEMON:{
      return{ 
        ...state,              
        pokemons: payload
      } 
    }

    default:
      return state;
  }
}
