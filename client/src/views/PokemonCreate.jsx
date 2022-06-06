import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, postPokemon } from "../store/action";
import { Link } from "react-router-dom";
import s from "../style/form.module.css";
import { validate } from "../validate/text";


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
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonReducers.allTypes);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  function handleChange(e) {
    setInput((preState) => {
      const newState = {
        ...preState,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
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
      name: undefined,
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
    <div className={s.body}>
      <div className={s.contenedor}>
        <form className={s.form} onSubmit={(e) => handleSubmite(e)}>
          <Link to="/home">
            <button className={s.btn_submit2}>Volver</button>
          </Link>
          <div className={s.form_header}>
            {" "}
            <h1 className={s.form_title}>
              P<span>okemons</span>
            </h1>
          </div>
          <label className={s.form_label}>Nombre: </label>
          {error.name && <p className={s.error}>{error.name}</p>}
          <input
            className={s.form_inpt}
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Fuerza: </label>
          {error.attack && <p className={s.error}>{error.attack}</p>}
          <input
            className={s.form_inpt}
            type="number"
            value={input.attack}
            name="attack"
            onChange={(e) => handleChange(e)}
            min='0'
          />
          <label className={s.form_label}>Vida: </label>
          {error.hp && <p className={s.error}>{error.hp}</p>}
          <input
          min='0'
            className={s.form_inpt}
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Defenza: </label>
          {error.defense && <p className={s.error}>{error.defense}</p>}
          <input
          min='0'
            className={s.form_inpt}
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Altura: </label>
          {error.height && <p className={s.error}>{error.height}</p>}
          <input
          min='0'
            className={s.form_inpt}
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Peso: </label>
          {error.weight && <p className={s.error}>{error.weight}</p>}
          <input
          min='0'
            className={s.form_inpt}
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Velocidad: </label>
          {error.speed && <p className={s.error}>{error.speed}</p>}
          <input
          min='0'
            className={s.form_inpt}
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
          />
          <label className={s.form_label}>Imagen: </label>
          {error.img && <p className={s.error}>{error.img}</p>}
          <input
            className={s.form_inpt}
            type="text"
            value={input.img}
            name="img"
            onChange={(e) => handleChange(e)}
          />
          <select className={s.form_label} onChange={(e) => handleSelect(e)}>
            <option className={s.form_label} value="default">
              Types
            </option>
            {types &&
              types.map((e) => (
                <option className={s.form_label} value={e.name} key={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
          <button  disabled={error.name || error.hp || error.attack || error.defense || error.speed || error.height || error.weight || error.types || input.name === '' ? true : false } className={s.btn_submit}>Crear Pokemon</button>
        </form>
      </div>
    </div>
  );
}
