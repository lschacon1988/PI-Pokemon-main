import {
  FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  NAME_POKEMON,
  ORDER_BY,
} from "../action/actionType";

const initialState = {
  pokemons: [],
  pokemonAll: [],
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
    case NAME_POKEMON: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case FILTER_TYPE: {
      const allpokemons = state.pokemonAll;
      const typePokemons =
        payload === "all"
          ? allpokemons
          : allpokemons.filter((e) => {
              return e.types.find((t) => t === payload);
            });

      return {
        ...state,
        pokemons: typePokemons,
      };
    }
    case ORDER_BY: {
      const allpokemons = state.pokemons;
      // const pokemonOrder =
    }
    case FILTER_CREATE: {
      const allpokemons = state.pokemonAll;
      const createPokemon =
        payload === "created"
          ? allpokemons.filter((e) => e.createDb)
          : allpokemons.filter((e) => !e.createDb);
      return {
        ...state,
        pokemons: createPokemon
      };
    }

    default:
      return state;
  }
}
