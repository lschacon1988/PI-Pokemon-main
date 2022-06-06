import { useState } from "react";
import s from "../style/card.module.css";

export default function Pokemon(props) {
  const { pokemon, navigate } = props;
  const { name, img, id, types} = pokemon; 
 
  return (
    // <main className={s.container}>
      // <section className={s.card_container}>
        
     <div className={s.card}>
      {/* <div className={s.card_img}> */}
        
      <button className={s.btn} onClick={() => navigate(id)}><img  src={img? img: 'https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg'} alt={name} /></button>
        {/* </div> */}
      {/* <div className={s.card_info} > */}
      <h3 className={s.span}>{name}</h3> <b/>
      <p className={s.span2}>Types: {types.map(e=>{
        return(<ul>
          <li>{e.name}</li>
        </ul>)
      })}</p>
      </div>
        // </div>       
        // </section>      
    // </main>
  );
}
