import { useState } from "react";
import s from "./style.module.css";

export default function Pokemon(props) {
  const { pokemon, navigate } = props;
  const { name, img, id, types} = pokemon;
 
  console.log(types)
  let type = types?.map((e) => e.name);

  //¨['jsjsjjs']
  //[{name:jhsadjgd}]
  return (
    <main className={s.card}>
      <h1>Yo soy</h1>
      <img className={s.img} src={img} alt={name} />
      <span className={s.span}>{name}</span>
      <span className={s.span}>Types: {type}</span>
      <div className={s.btn}>
        <button onClick={() => navigate(id)}>Detail</button>
      </div>
    </main>
  );
}
