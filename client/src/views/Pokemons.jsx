import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import {
  filterCreate,
  filterType,
  getpokemonBack,
  ordenBy,
  ordenByPower,
} from "../store/action";
import s from "../style/card.module.css";
import style from "../style/title.module.css"
import ss from "../style/filters.module.css";
import styleSearch from '../style/search.module.css'
import Search from "./Search";
import Paginado from "./Paginado";
import FilterType from "./FilterType";
import FilterCreate from "./FilterCreate";
import OrderBy from "./OrderBy";
import { Link } from "react-router-dom";

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpokemonBack());
  }, [dispatch]);

  const [order, setOrder] = useState("");
  const pokemonsPR = useSelector((state) => state.pokemonReducers.pokemons);
  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitpage] = useState(12);
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
    setOrder(e.target.value);
  }
  function handleOderByPow(e) {
    dispatch(ordenByPower(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div className={s.container_home}>
      <div className={style.title}>
        <h1>Pokemons</h1>
        <Link to="/pokemons"><button>Vamos a crear un Pokemon</button> </Link>
      </div>
      <main className={ss.contenedor_filter}>
        <OrderBy handle={handleOderByAlf} navigate={handleOderByPow} />
        <FilterType navigate={handleFilterType} />
        <FilterCreate handle={handleFilterCreate} />
      </main>
      <div className={styleSearch.conte_search}>
        <Search page={setCurrentPage} />
      </div>

      <div className={s.contenedor}>
        {currentPokemos?.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            navigate={handleNavigate}
          />
        ))}
      </div>
      <Paginado
        curret={currentPage}
        pokemons={pokemonsPR?.length}
        limitPage={limitPage}
        paginado={paginado}
      />
    </div>
  );
}
