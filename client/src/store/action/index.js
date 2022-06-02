import {
    FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  GET_TYPE,
  NAME_POKEMON,
  ORDER_BY,
  ORDER_BY_POWER,
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

export function getType(){
  return async (dispatch) =>{
    const response = await axios.get('http://localhost:3001/types')
    const {data} = response    
    return dispatch({type: GET_TYPE, payload: data})
  }
}
export function postPokemon (payload){
  console.log('AAAAAAA', payload)
  return async function (){
      const response = await axios.post('http://localhost:3001/pokemons',payload);
      return response
      
  }
}

export function ordenBy(payload) {
  return {
    type: ORDER_BY,
    payload: payload,
  }
}
export function ordenByPower(payload) {
  return {
    type: ORDER_BY_POWER,
    payload: payload,
  }
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