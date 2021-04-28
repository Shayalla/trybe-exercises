import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data'

function App() {
  return (
      <Pokedex Pokedex={pokemons}/>
  );
}

export default App;
