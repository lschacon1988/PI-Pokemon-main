import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, postPokemon } from "../store/action";
import { Link } from "react-router-dom";
import s from "../componet/style.module.css";

export default function PokemonCreate({ history }) {
  const { push } = history;
  const [input, setInput] = useState({
    name: "",
    img: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonReducers.allTypes);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }
  function handleSubmite(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Tu pokemon se ha creado");
    setInput({
      name: "",
      img: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    });
    push("/home");
  }

  return (
    <div className={s.cajaCentral}>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <form onSubmit={(e) => handleSubmite(e)}>
        <label>Nombre: </label>
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <label>Fuerza: </label>
        <input
          type="number"
          value={input.attack}
          name="attack"
          onChange={(e) => handleChange(e)}
        />
        <label>Vida: </label>
        <input
          type="number"
          value={input.hp}
          name="hp"
          onChange={(e) => handleChange(e)}
        />
        <label>Defenza: </label>
        <input
          type="number"
          value={input.defense}
          name="defense"
          onChange={(e) => handleChange(e)}
        />
        <label>Altura: </label>
        <input
          type="number"
          value={input.height}
          name="height"
          onChange={(e) => handleChange(e)}
        />
        <label>Peso: </label>
        <input
          type="number"
          value={input.weight}
          name="weight"
          onChange={(e) => handleChange(e)}
        />
        <label>Velocidad: </label>
        <input
          type="number"
          value={input.speed}
          name="speed"
          onChange={(e) => handleChange(e)}
        />
        <label>Imagen: </label>
        <input
          type="text"
          value={input.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        <select onChange={(e) => handleSelect(e)}>
          <option value="default">Types</option>
          {types &&
            types.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
        </select>
        <button>Crear Pokemon</button>
      </form>
    </div>
  );
}
