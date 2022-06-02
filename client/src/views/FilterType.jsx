
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../componet/style.module.css";
import { getType } from "../store/action";

export default function FilterType({ navigate }) {
  const dispatch = useDispatch();
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);
  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);
  
  return (
    <select className={s.select} onChange={(e) => navigate(e)}>
      <option value="all">Types</option>
      {pokemontype && pokemontype.map(e=>(
        <option value={e.name} key={e.id}>{e.name}</option>
      ))}
    </select>
  );
}
{/* <option value="all">Filter Types</option>      
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
      <option value="shadow">Shadow</option> */}