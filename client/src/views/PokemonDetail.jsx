import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../componet/style.module.css'

export default function PokemonDetail() {
  const { idPokemon } = useParams();
  console.log("SOY IDpOKEMON", idPokemon);
  // function getPokemonID(idPokemon){
  //     return async ()=>{
  //         const response = await axios.get(`http://localhost:3001/pokemons/${idPokemon}`)
  //         const {data} = response
  //         console.log('SOY DATA', data)
  //         return data
  //     }
  // }

  const [state, setState] = useState();

  useEffect(() => {
      axios.get(`http://localhost:3001/pokemons/${idPokemon}`).then((response)=>{
          setState(response.data)
      })
  }, [idPokemon]);

  return (
  <div className={s.cardDetail}>
      { state && (
          <>
          <img className={s.img} src={state.img} alt="" />
          </>
      )}

  </div>);
}
