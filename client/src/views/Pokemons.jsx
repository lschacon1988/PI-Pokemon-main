import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { filterCreate, filterType, getpokemonBack, getType, ordenBy, ordenByPower } from "../store/action";
import s from "../componet/style.module.css";
import Search from "./Search";

import Paginado from "./Paginado";
import FilterType from "./FilterType";
import FilterCreate from "./FilterCreate";
import OrderBy from "./OrderBy";

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpokemonBack());
    dispatch(getType())
  }, [dispatch]);
  const [order, setOrder] = useState('')
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
    setCurrentPage(1);
  };
  const handleFilterCreate = (e) => {
    dispatch(filterCreate(e.target.value));
    setCurrentPage(1);
  }; 

  function handleOderByAlf(e) {
    dispatch(ordenBy(e.target.value));
    // setCurrentPage(1);
    setOrder(e.target.value)
  }
  function handleOderByPow(e){
    dispatch(ordenByPower(e.target.value))
    setOrder(e.target.value)
  }

  return (
    <div className={s.cajaCentral}>
      <main>
        <h1>Pokemons</h1>
        <OrderBy handle={handleOderByAlf} navigate={handleOderByPow} />
        <FilterType navigate={handleFilterType} />
        <FilterCreate handle={handleFilterCreate} />
        <Paginado
          pokemons={pokemonsPR?.length}
          limitPage={limitPage}
          paginado={paginado}
        />
        <Search />
      </main>
      <div className={s.cajaCentral}>
        {currentPokemos?.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            navigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
}
