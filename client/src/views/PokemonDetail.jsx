import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      {
        state &&
          state.map((e) => (
            <div key={e.id}>
              <section>
                <span>
                  <h3>Nombre y ID</h3>
                  Name: {e.name} ID: {e.id} 
                </span>
                <span>
                  <h3>Estadisticas</h3>
                  Vida: {e.hp} Fuerza: {e.attack} Velocidad: {e.speed}
                </span>
                <span>
                  <h3>Dimenciones</h3>
                  Altura: {e.height} Peso: {e.weight}
                </span>
                <span>
                  <Link to="/home">
                    <button>Volver</button>
                  </Link>
                </span>
                <article>
                  <img src={e.img} alt={e.name} />
                </article>
              </section>
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
