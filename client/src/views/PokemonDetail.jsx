import axios from "axios";
import { useEffect, useState } from "react";
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

  console.log("Soy estado de detalle", state);

  return (
    <div className={s.cardDetail}>
      {
        state &&
          state.map((e) => (
            <div key={e.id}>
              <img src={e.img} alt={e.name} />
              <samp>
                Name: {e.name} Type: {e.types}
              </samp>
            </div>
          ))

        // <>
        //   <img className={s.img} src={state.img} alt="" />
        //   <samp>
        //     Name: {state.name} Type: {state.types}
        //   </samp>
        // </>
      }
    </div>
  );
}
