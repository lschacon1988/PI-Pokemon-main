import {GET_POKEMONS} from './actionType'
import axios from 'axios'

function setPokemons(payload){
return {type: GET_POKEMONS, payload}
}

export function getpokemonBack(){
    return  async (dispatch) =>{
        const response = await axios.get('http://localhost:3001/pokemons')
        const { data } = response
       return dispatch(setPokemons(data))
        
    }
}

// export function getPokemonID(id){
//     return async ()=>{
//         const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
//         const {data} = response
//         return data
//     }
// }
