import logo from './logoPoke.svg';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

function App() {

	return (
		<>
			<NavBar></NavBar>
			<SearchBar></SearchBar>
			<PokemonList></PokemonList>
		</>
	);
}

export default App;
