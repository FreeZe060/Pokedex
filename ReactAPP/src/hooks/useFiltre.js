import { useState, useEffect } from 'react';

const useFiltre = ({ pokemonData, searchTerm, selectedTypes, language }) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        if (!pokemonData) {
            setFilteredPokemons([]);
            return;
        }

        const lowerCasedSearchTerm = searchTerm.toLowerCase();

        const result = pokemonData.filter((pokemon) => {
            const matchesSearchTerm = pokemon.names[language].toLowerCase().includes(lowerCasedSearchTerm);
            const matchesSelectedTypes = selectedTypes.length === 0 ? true : selectedTypes.every((type) => pokemon.types.includes(type));
            return matchesSearchTerm && matchesSelectedTypes;
        });

        setFilteredPokemons(result);
    }, [pokemonData, searchTerm, selectedTypes, language]);

    return filteredPokemons;
};

export default useFiltre;
