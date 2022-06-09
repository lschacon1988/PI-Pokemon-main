import { useState } from "react";
import s from "../style/card.module.css";

export default function Pokemon(props) {
  const { pokemon, navigate } = props;
  const { name, img, id, types, msg } = pokemon;

  return (
    pokemon.msg ? <h1>{msg}</h1>: <div className={s.card}>
      <button className={s.btn} onClick={() => navigate(id)}>
        <img
          src={
            img
              ? img
              : "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
          }
          alt={name}
        />
      </button>
      <h3 className={s.span}>{name}</h3> <b />
      <p className={s.span2}>
        Types:{" "}
        {types.map((e) => {
          return (
            <ul key={e.name}>
              <li>{e.name}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
}
