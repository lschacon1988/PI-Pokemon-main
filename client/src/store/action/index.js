import {
    FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  NAME_POKEMON,
  ORDER_BY,
} from "./actionType";
import axios from "axios";

function setPokemons(type, payload) {
  return { type: type, payload };
}

export function getpokemonBack() {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/pokemons");
    const { data } = response;
    return dispatch(setPokemons(GET_POKEMONS, data));
  };
}

export function getPokemonNAME(name) {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}` 
    );

    const { data } = response;

    return dispatch({ type: NAME_POKEMON, payload: data });
  };
}

export function ordenBy(payload) {
  return setPokemons(ORDER_BY, payload);
}

export function filterType(payload) {
  return {
    type: FILTER_TYPE,
    payload: payload,
  };
}

export function filterCreate(payload){
    return{
        type : FILTER_CREATE,
        payload: payload
    }
}