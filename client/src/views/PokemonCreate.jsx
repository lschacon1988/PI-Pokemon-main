import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  postPokemon } from "../store/action";
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
  const [error, setError] = useState({});
   
  const dispatch = useDispatch();
  const todos = useSelector(state=> state.pokemonReducers.pokemons)
  const types = useSelector((state) => state.pokemonReducers.allTypes);
  const existe = todos.filter(e => e.name === input.name) 

  const validate =(input)=>{
    const error = {};
    if (!input.name) {
      error.name = "Este campo es obligatorio";
    } else if (!/^[a-zA-Z]*$/.test(input.name)) {
      error.name = "Este campo solo acepta texto";
    }else if(existe.length>0){
      error.name = "Este pokemon existe"
    }
    if (!input.attack) {
      error.attack = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.attack)) {
      error.attack = "Solo numeros";    
    }
    if (!input.hp) {
      error.hp = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.hp)) {
      error.hp = "Solo numeros";    
    }
    if (!input.defense) {
      error.defense = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.defense)) {
      error.defense = "Solo numeros";    
    }
    if (!input.height) {
      error.height = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.height)) {
      error.height = "Solo numeros";    
    }
    if (!input.weight) {
      error.weight = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.weight)) {
      error.weight = "Solo numeros";    
    }
    if (!input.speed) {
      error.speed = "este campo es obligatorio";
    } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.speed)) {
      error.speed = "Solo numeros";    
    }
    if(!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.img)){
      error.img = 'direccion no valida'
    }
    return error;
  }
  
  
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
