import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ onSearch }) {
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  console.log("SOY NAME CREO", name);
  console.log('spy algo',onSearch(name))
  return (
    <div>
      <Link to={`/pokemons?name=${name}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(name);
          }}
        >
          <input
            type="search"
            placeholder="Buscar Pokemon"
            onChange={(e) => handleInputChange(e)}
          />
          <input type="button" value="buscar" />
        </form>
      </Link>
    </div>
  );
}
