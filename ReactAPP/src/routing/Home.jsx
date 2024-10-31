import React from 'react';
import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <>
			<SearchBar onSearch={setSearchTerm}></SearchBar>
			<PokemonList searchTerm={searchTerm}></PokemonList>
		</>
    );
}

export default Home;
