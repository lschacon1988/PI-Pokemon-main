// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemonNAME } from "../store/action";
// import s from "../componet/style.module.css";

// export default function PokemonName(props) {
//   const { navigate, search } = props;

// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(getPokemonNAME(search));
// //   }, [dispatch]);
//   const {
//     pokemonReducers: { pokemonName },
//   } = useSelector((state) => {
//     return state;
//   });
//   console.log("SOY POKEMONNAME STATE", pokemonName);
//   return (
//     <div className={s.card}>
//       <img className={s.img} src={pokemonName.img} alt={pokemonName.name} />
//       <span className={s.span}>{pokemonName.name}</span>
//       <span className={s.span}>Types: {pokemonName.types}</span>
//       <div className={s.btn}>
//         <button onClick={() => navigate(pokemonName.id)}>Detail</button>
//       </div>
//     </div>
//   );
// }
