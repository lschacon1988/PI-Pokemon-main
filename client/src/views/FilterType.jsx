
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../style/filters.module.css";
import { getType } from "../store/action";

export default function FilterType({ navigate }) {
  const dispatch = useDispatch();
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);
  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);
  
  return (
    
    <select className={s.select}  onChange={(e) => navigate(e)}>
      <option value="all">Types</option>
      {pokemontype && pokemontype.map(e=>(
        <option value={e.name} key={e.id}>{e.name}</option>
        ))}
    </select>
        
        
  );
}
