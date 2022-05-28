import s from "./style.module.css";

export default function Pokemon(props) {
  const { pokemon, navigate } = props;
  const { name, img, id } = pokemon;

  return (
    <main className={s.card}>
      <img className={s.img} src={img} alt={name} />
      <span className={s.span}>{name}</span>
      <div className={s.btn}>
        <button onClick={() => navigate(id)}>Detail</button>
      </div>
    </main>
  );
}
