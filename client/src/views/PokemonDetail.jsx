import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import s from "../componet/style.module.css";

export default function PokemonDetail() {
  const { idPokemon } = useParams();

  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons/${idPokemon}`)
      .then((response) => {
        setState(response.data);
      });
  }, [idPokemon]);

 
  return (
    <div className={s.cardDetail}>
      {state && (
        <>
          <img className={s.img} src={state.img} alt="" />
          <samp>
            Name: {state.name} Type: {state.types}
          </samp>
        </>
      )}
    </div>
  );
}
