import PokemonCard from './PokemonCard'

import { useState, useEffect } from "react";
import { useFetch } from "../hooks/PokeApiFetch";

function PokemonList() {
    const pokemonsUrl = "https://pokedex-jgabriele.vercel.app/pokemons.json";
    const typesUrl = "https://pokedex-jgabriele.vercel.app/types.json";

    const { data: pokemonData, isPending: isPendingPokemon, error: errorPokemon } = useFetch(pokemonsUrl);
    const { data: typesData, isPending: isPendingTypes, error: errorTypes } = useFetch(typesUrl);

    const [language, setLanguage] = useState('fr');
    return (
        <section class="flex justify-center">
            <div class="flex flex-wrap justify-center w-[90%]">
                {(isPendingPokemon || isPendingTypes) && <div>Loading....</div>}
                {(errorPokemon || errorTypes) && <div>Error loading data</div>}

                {pokemonData && typesData && pokemonData.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} langage={language} types={typesData}/>
                ))}
            </div>
        </section>
    );
}

export default PokemonList;