import s from "./style.module.css";

export default function Pokemon({navigate,
  name, img, id, types}) {
  // const { pokemon, navigate } = props;
  // const { name, img, id, types } = pokemon;

  return (
    <main className={s.card}>
      <h1>Yo soy</h1>
      <img className={s.img} src={img} alt={name} />
      <span className={s.span}>{name}</span>
      <span className={s.span}>Types: {types}</span>
      <div className={s.btn}>
        <button onClick={() => navigate(id)}>Detail</button>
      </div>
    </main>
  );
}
