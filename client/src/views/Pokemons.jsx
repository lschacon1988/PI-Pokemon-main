import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import { getpokemonBack, getPokemonNAME } from "../store/action";
import s from "../componet/style.module.css";
import Search from "./Search";
import PokemonName from "./PokemonName";
import Paginado from "./Paginado";

export default function Pokemons(props) {
  const {
    history: { push },
    location: { search },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpokemonBack(search));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemonNAME(search));
  }, [dispatch]);
  const {
    pokemonReducers: { pokemons },
    pokemonReducers: { pokemonName },
  } = useSelector((state) => {
    return state;
  });

  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitpage] = useState(8);
  const indexOfLastPage = currentPage * limitPage;
  const indexOffirstpage = indexOfLastPage - limitPage;
  const currentPokemos = pokemons?.slice(indexOffirstpage, indexOfLastPage);

  const paginado = (pag) => {
    setCurrentPage(pag);
  };

  const onSearch = (name) => {
    dispatch(getPokemonNAME(name));
  };

  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };
  return (
    <div>
      <section>
        <h1>Pokemons</h1>

        <Paginado
          pokemons={pokemons?.length}
          limitPage={limitPage}
          paginado={paginado}
        />

        <Search onSearch={onSearch} />
      </section>
      <div>
        {pokemonName.name ? (
        <Pokemon
          key={pokemonName.id}
          navigate={handleNavigate}
          pokemon={pokemonName}
        />
      ) : ( currentPokemos?.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            navigate={handleNavigate}
            pokemon={pokemon}
          />
        )
      ))}
      </div>
    </div>
  )
}
