import PokemonCard from './PokemonCard'
import { useFetch } from "../hooks/useFetch";

function PokemonList({ language, searchTerm}) {
    const pokemonsUrl = "https://pokedex-jgabriele.vercel.app/pokemons.json";
    const typesUrl = "https://pokedex-jgabriele.vercel.app/types.json";

    const { data: pokemonData, isPending: isPendingPokemon, error: errorPokemon } = useFetch(pokemonsUrl);
    const { data: typesData, isPending: isPendingTypes, error: errorTypes } = useFetch(typesUrl);

    const filteredPokemons = pokemonData ? pokemonData.filter(pokemon => pokemon.names[language].toLowerCase().includes(searchTerm.toLowerCase())) : [];

    return (
        <section class="flex justify-center">
            <div class="flex flex-wrap justify-center w-[90%]">
                {(isPendingPokemon || isPendingTypes) && <div>Loading....</div>}
                {(errorPokemon || errorTypes) && <div>Error loading data</div>}

                {filteredPokemons && typesData && filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} langage={language} types={typesData}/>
                ))}
            </div>
        </section>
    );
}

export default PokemonList;