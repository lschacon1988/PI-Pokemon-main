import { Route } from "react-router-dom";
import Home from "../src/views/Home";
import Pokemons from "../src/views/Pokemons";
import PokemonDetail from "../src/views/PokemonDetail";
import PokemonCreate from "./views/PokemonCreate";
//  import PokemonName from "./views/PokemonName";


function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Pokemons} />
     <Route path='/pokemons' exact component={PokemonCreate}/> 
      <Route path="/pokemons/:idPokemon" exact component={PokemonDetail} />
    </div>
  );
}

export default App;
