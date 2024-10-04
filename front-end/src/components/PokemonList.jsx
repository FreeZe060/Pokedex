import PokemonCard from './PokemonCard'

import { useState, useEffect } from "react";
import { useFetch } from "../hooks/PokeApiFetch";

function PokemonList() {
    const [url, setUrl] = useState("https://pokedex-jgabriele.vercel.app/pokemons.json");
    const { data, isPending, error } = useFetch(url);
    const [language, setLanguage] = useState('en');
    return (
        <section class="flex justify-center">
            <div class="flex flex-wrap justify-center w-[90%]">
                {isPending && <div>Loading....</div>}
                {error && <div>{error}</div>}
                {data && data.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} langage={language}/>
                ))}
            </div>
        </section>
    );
}

export default PokemonList;