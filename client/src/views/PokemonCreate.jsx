import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, postPokemon } from "../store/action";
import { Link } from "react-router-dom";
import s from "../style/form.module.css";

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
    console.log(input)
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
    <div className={s.body}>
      <div className={s.contenedor}>
      <form className={s.form} onSubmit={(e) => handleSubmite(e)}>
      <Link to="/home">
        <button className={s.btn_submit2}>Volver</button>
      </Link>
        <div className={s.form_header}> <h1 className={s.form_title}>P<span>okemons</span></h1></div>
        <label className={s.form_label} >Nombre: </label>
        <input
        className={s.form_inpt}
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label} >Fuerza: </label>
        <input
        className={s.form_inpt}
          type="number"
          value={input.attack}
          name="attack"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label} >Vida: </label>
        <input
        className={s.form_inpt}
          type="number"
          value={input.hp}
          name="hp"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label}>Defenza: </label>
        <input
        className={s.form_inpt}
          type="number"
          value={input.defense}
          name="defense"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label}>Altura: </label>
        <input
        className={s.form_inpt}
          type="number"
          value={input.height}
          name="height"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label}>Peso: </label>
        <input
        className={s.form_inpt}
          type="number"
          value={input.weight}
          name="weight"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label}>Velocidad: </label>
        <input
        className={s.form_inpt}
        type="number"
          value={input.speed}
          name="speed"
          onChange={(e) => handleChange(e)}
          />
        <label className={s.form_label}>Imagen: </label>
        <input
        className={s.form_inpt}
          type="text"
          value={input.img}
          name="img"
          onChange={(e) => handleChange(e)}
          />
        <select className={s.form_label} onChange={(e) => handleSelect(e)}>
          <option className={s.form_label} value="default">Types</option>
          {types &&
            types.map((e) => (
              <option className={s.form_label} value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
        </select>
        <button className={s.btn_submit}>Crear Pokemon</button>
      </form>
            </div>
    </div>
  );
}
