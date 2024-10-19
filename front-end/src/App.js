import { useState } from 'react';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { useLanguage } from './hooks/useLanguage';

function App() {

	const { language, changeLanguage } = useLanguage();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<NavBar language={language} onLanguageChange={changeLanguage}></NavBar>
			<SearchBar onSearch={setSearchTerm}></SearchBar>
			<PokemonList language={language} searchTerm={searchTerm}></PokemonList>
		</>
	);
}

export default App;
