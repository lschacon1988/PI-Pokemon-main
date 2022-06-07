import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import s from "../style/detail.module.css";

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
    <div className={s.contenedor}>
      <main className={s.cardDetail}>
        {state &&
          state.map((e) => (
            <div key={e.id}>
              <section>
               
                  <h3>Nombre y ID</h3>
                 <p> Name: {e.name} ID: {e.id}</p> 
               
                
                  <h3>Estadisticas</h3>
                 <p> Vida: {e.hp} Fuerza: {e.attack} Velocidad: {e.speed}</p> 
                
                
                  <h3>Dimenciones</h3>
                  <p> Altura: {e.height} Peso: {e.weight}</p> 
                
                
                  <Link to="/home">
                    <button>Volver</button>
                  </Link>
                
                <article>
                  <img
                    src={
                      e.img
                        ? e.img
                        : "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
                    }
                    alt={e.name}
                  />
                </article>
              </section>
            </div>
          ))}
      </main>
    </div>
  );
}
