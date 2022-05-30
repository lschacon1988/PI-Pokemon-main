import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { getpokemonBack, getPokemonNAME } from "../store/action";
import s from "../componet/style.module.css";
import Search from "./Search";
import PokemonName from "./PokemonName";

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpokemonBack());
  }, [dispatch]);
  const {
    pokemonReducers: { pokemons, pokemonName },
  } = useSelector((state) => {
    return state;
  });

  console.log('SOY POKEMON ', pokemonName)
  
  async function onSearch(name) {    
    const data =  getPokemonNAME(name);
    return data
  }


  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };
  return (
    <div className={s.cardCentral}>
      <h1>Pokemons</h1>
      <Search onSearch={onSearch} />

      {(
        pokemons?.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            navigate={handleNavigate}
            pokemon={pokemon}
          />
        ))
      )}
    </div>
  );
}
