import React from 'react';
import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

function Home({language}) {

    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <>
			<SearchBar onSearch={setSearchTerm}></SearchBar>
			<PokemonList language={language} searchTerm={searchTerm}></PokemonList>
		</>
    );
}

export default Home;
