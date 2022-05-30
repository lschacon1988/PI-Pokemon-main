// import axios from "axios";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import s from "../componet/style.module.css";
import { getPokemonNAME } from "../store/action";

export default function PokemonName(props) {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemonNAME(name))
    }, [dispatch]);
    
    const {
      pokemonReducers: { pokemonName },
      name
  } = useSelector((state) => {
      return state;
    });
     console.log('SOY POKEMONNAME',name, pokemonName)

  return (
    <div className={s.cardDetail}>
      {pokemonName && (
        <>
          <Pokemon
            img={pokemonName.img}
            name={pokemonName.name}
            types={pokemonName.types}
          />
        </>
      )}
    </div>
  );
}
