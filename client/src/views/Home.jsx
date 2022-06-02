import { Link } from "react-router-dom";
import s from "../componet/style.module.css";

export default function Home() {
  return (
    <main className={s.home}>
      <h1>Pokemons</h1>
      <section>
        <Link to="/home">Ver los pokemons</Link>
      </section>
    </main>
  );
}
