import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Search({ onSearch }) {
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  
  
  return (
    <div>
      <form
        
      >
        <input
          type="search"
          placeholder="Buscar Pokemon"
          onChange={(e) => handleInputChange(e)}
        />
        <Link to={`/pokemons?name=${name}`}>
          <input type="button" value="buscar" onSubmit={(e) => {
          e.preventDefault();
           onSearch(name) ;
        }} />
        </Link>
      </form>
    </div>
  );
}
