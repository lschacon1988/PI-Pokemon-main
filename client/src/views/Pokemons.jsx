import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { getpokemonBack } from "../store/action";
import s from "../componet/style.module.css";
import Search from "./Search";

import Paginado from "./Paginado";

export default function Pokemons(props) {
  const {
    history: { push},
  } = props;

  const dispatch = useDispatch();
  const { pokemonReducers: { pokemons, pokemonAll}} = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(getpokemonBack());
  }, [dispatch]);

  
  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitpage] = useState(8);
  const indexOfLastPage = currentPage * limitPage;
  const indexOffirstpage = indexOfLastPage - limitPage;
  const currentPokemos = pokemonAll?.slice(indexOffirstpage, indexOfLastPage);
  
  const paginado = (pag) => {
    setCurrentPage(pag);
  };
  
  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };
  console.log('QUIEN COÑO SOY', currentPokemos)

  return (
    <div>
      <main>
        <h1>Pokemons</h1>
        <select>
          <option value="asc">Acendente</option>
          <option value="desc">descendente</option>
        </select>
        <Paginado
          pokemons={pokemons?.length}
          limitPage={limitPage}
          paginado={paginado}
        />

        <Search />
      </main>
      <div>
        {currentPokemos?.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            navigate={handleNavigate}
            pokemon={pokemon}
          />
        ))}
      </div>
    </div>
  );
}
