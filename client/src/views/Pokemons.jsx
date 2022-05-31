import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { filterCreate, filterType, getpokemonBack } from "../store/action";
import s from "../componet/style.module.css";
import Search from "./Search";

import Paginado from "./Paginado";

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  const pokemonsPR2 = useSelector((state) => state.pokemonReducers.pokemonAll);
  useEffect(() => {
    dispatch(getpokemonBack());
  }, [dispatch]);
  
  const pokemonsPR = useSelector((state) => state.pokemonReducers.pokemons);
  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitpage] = useState(8);
  const indexOfLastPage = currentPage * limitPage;
  const indexOffirstpage = indexOfLastPage - limitPage;
  const currentPokemos = pokemonsPR.slice(indexOffirstpage, indexOfLastPage);
  
  const paginado = (pag) => {
    setCurrentPage(pag);
  };
  
  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };
  const handleFilterType = (e) => {
    dispatch(filterType(e.target.value));
    setCurrentPage(1)
  };

  const handleFilterCreate = (e)=>{
    dispatch(filterCreate(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={s.contenedor}>
      <main>
        <h1>Pokemons</h1>
        <select className={s.select}>
          <option value="default">default</option>
          <option value="asc">Acendente</option>
          <option value="desc">descendente</option>
        </select>
        <select className={s.select} onChange={(e) => handleFilterType(e)}>
          <option value="">types</option>
          <option value="all">All</option>
          <option value="poison">Poison</option>
          <option value="normal">Normal</option>
          <option value="flying">Flying</option>
          <option value="bug">Bug</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="fighting">Fighting</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
        </select>
        <select onChange={(e) => handleFilterCreate(e)}  className={s.select}>
          <option value="default">default</option>
          <option value="all">All</option>
          <option value="existente">Existente</option>
          <option value="created">Creado</option>
        </select>

        <Paginado
          pokemons={pokemonsPR?.length}
          limitPage={limitPage}
          paginado={paginado}
        />

        <Search />
      </main>
      <div className={s.cajaCentral}>
        {
          currentPokemos?.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              navigate={handleNavigate}
              name={pokemon.name}
              types={pokemon.types}
              img={pokemon.img}
              id = {pokemon.id}
            />
          
        ))}
      </div>
    </div>
  );
}
