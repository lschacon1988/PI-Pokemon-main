import { GET_POKEMONS } from "../action/actionType";

const initialState = {
  pokemons:[]
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

    default:
      return state;
  }
}
