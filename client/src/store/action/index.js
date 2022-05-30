import {GET_POKEMONS, NAME_POKEMON} from './actionType'
import axios from 'axios'

function setPokemons(type,payload){
return {type: type , payload}
}

export function getpokemonBack(){
    return  async (dispatch) =>{
        const response = await axios.get('http://localhost:3001/pokemons')
        const { data } = response
       return dispatch(setPokemons(GET_POKEMONS ,data))
        
    }
}

export function getPokemonNAME(name){
    return async (dispatch)=>{
        const response = await axios.get(`http://localhost:3001/pokemons/${name}`)
        const {data} = response
        return dispatch(setPokemons(NAME_POKEMON, data))
    }
}
