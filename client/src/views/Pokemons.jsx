import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { getpokemonBack } from "../store/action";
import s from '../componet/style.module.css'

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const {pokemonReducers:{pokemons}} = useSelector((state) => {
    return state;
  });

  
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getpokemonBack());
  }, [dispatch]);


  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };
  return (
    <div className={s.cardCentral}>
        <h1>Pokemons</h1>
      {pokemons?.map((pokemon)=>(<Pokemon key={pokemon.id} navigate={handleNavigate} pokemon={pokemon} />))}
    </div>
  );
}
