import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Hola</h1>
      <section>
        <Link to="/pokemons">Ver los pokemons</Link>
      </section>
    </main>
  );
}
