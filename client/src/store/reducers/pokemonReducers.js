import {
  CREATE_POKEMON,
  FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  GET_TYPE,
  NAME_POKEMON,
  ORDER_BY,
  ORDER_BY_POWER,
} from "../action/actionType";

const initialState = {
  pokemons: [],
  pokemonAll: [],
  allTypes: [],
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
    case GET_TYPE: {
      return {
        ...state,
        allTypes: payload,
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
              return e.types.find((t) => t.name === payload);
            });

      return {
        ...state,
        pokemons: typePokemons,
      };
    }
/**case 'FILTER_BY_DIETS':
            const recipes = state.allRecipesCopy//-->[100]
            const recipesFilterByDiets = //-->[20]
                recipes.filter(recipe => {
                    let names = recipe.diets.map(diet => diet.name)//-->[ove,vegano,paleo]
                    if (names.includes(action.payload)) //carnivoro
                    return recipe
                })
            return {
                ...state,
                recipes: recipesFilterByDiets//-->[20]
          */

    case FILTER_CREATE: {
      const allpokemons = state.pokemonAll;
      const createPokemon =
        payload === "created"
          ? allpokemons.filter((e) => e.createDb)
          : allpokemons.filter((e) => !e.createDb);
      return {
        ...state,
        pokemons: createPokemon,
      };
    }
    case ORDER_BY: {
      const allpokemons = state.pokemons;
      const pokemonOrder =
        payload === "asc"
          ? allpokemons.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : allpokemons.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        pokemons: payload === "all" ? allpokemons : pokemonOrder,
      };
    }
    case ORDER_BY_POWER: {
      const allpokemons = state.pokemonAll;
      const pokemonOrder =
        payload === "max"
          ? allpokemons.sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (b.attack > a.attack) return 1;
              return 0;
            })
          : allpokemons.sort((a, b) => {
              if (a.attack > b.attack) return 1;
              if (b.attack > a.attack) return -1;
              return 0;
            });
      return {
        ...state,
        pokemons: payload === "all" ? allpokemons : pokemonOrder,
      };
    }
    case CREATE_POKEMON: {
      return {
        ...state,
        pokemons: [...state.pokemons, payload]
      };
    }
    default:
      return state;
  }
}
