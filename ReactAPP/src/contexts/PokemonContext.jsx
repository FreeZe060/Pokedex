import React, { createContext, useContext } from 'react';
import { useFetch } from "../hooks/useFetch";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    
    const pokemonsUrl = "https://pokedex-jgabriele.vercel.app/pokemons.json";
    const typesUrl = "https://pokedex-jgabriele.vercel.app/types.json";

    const { data: pokemonData, isPending: isPendingPokemon, error: errorPokemon } = useFetch(pokemonsUrl);
    const { data: typesData, isPending: isPendingTypes, error: errorTypes } = useFetch(typesUrl);

    const datas = {
        pokemonData,
        typesData,
        isPendingPokemon,
        isPendingTypes,
        errorPokemon,
        errorTypes,
    };

    return (
        <PokemonContext.Provider value={datas}>
            {children}
        </PokemonContext.Provider>
    );
}

export function usePokemonContext() {
    return useContext(PokemonContext);
}
