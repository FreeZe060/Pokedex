import React from 'react';

import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

import useSearch from '../hooks/useSearch';

function Home() {

    const { searchTerm, handleSearchChange } = useSearch();

    return (
        <>
            <SearchBar searchterm={searchTerm} onSearch={handleSearchChange}></SearchBar>
            <PokemonList searchTerm={searchTerm}></PokemonList>
        </>
    );
}

export default Home;
