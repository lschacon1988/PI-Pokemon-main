import { Link } from "react-router-dom";
import s from "../style/landy.module.css"

export default function Home() {
  return (
    <main className={s.home}>
      <h1>Pokemons</h1>
      <section>
        <Link to="/home" >
          <a href="#" className={s.btn_neon}>
            <span className={s.span1}></span>
            <span className={s.span2}></span>
            <span className={s.span3}></span>
            <span className={s.span4}></span>
            Vamos a ver los pokemon
          </a>
        </Link>
      </section>
    </main>
  );
}
