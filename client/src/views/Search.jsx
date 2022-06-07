import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonNAME } from "../store/action";

export default function Search({page}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();    
    setName(e.target.value.toLowerCase());
    page(1)
    
  };

  const onSearch = (e) => {
    e.preventDefault();    
    dispatch(getPokemonNAME(name));
    setName('')
  };

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Buscar Pokemon"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          type="submit"
          onClick={(e) => {
            onSearch(e);
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
