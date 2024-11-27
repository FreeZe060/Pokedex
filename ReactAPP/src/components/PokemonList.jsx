import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { useLanguageContext } from '../contexts/LanguageContext';
import { usePokemonContext } from '../contexts/PokemonContext';
import TypeSelection from '../components/TypeSelection';
import useFiltre from '../hooks/useFiltre';

function PokemonList({ searchTerm }) {
    const { language } = useLanguageContext();
    const { pokemonData, typesData, isPendingPokemon, isPendingTypes, errorPokemon, errorTypes } = usePokemonContext();

    const [selectedTypes, setSelectedTypes] = useState(() => {
        const savedTypes = localStorage.getItem('selectedTypes');
        return savedTypes ? JSON.parse(savedTypes) : [];
    });

    useEffect(() => {
        if (selectedTypes.length > 0) {
            localStorage.setItem('selectedTypes', JSON.stringify(selectedTypes));
        }
    }, [selectedTypes]);

    const filteredPokemons = useFiltre({
        pokemonData,
        searchTerm,
        selectedTypes,
        language,
    });

    if (isPendingPokemon || isPendingTypes) {
        return <div className="spinner"></div>
    }

    return (
        <>
            <TypeSelection types={typesData} langage={language} onTypeChange={(selected) => setSelectedTypes(selected)}></TypeSelection>

            <section className="flex justify-center mt-10">
                <div className="flex flex-wrap justify-center w-[90%]">

                    {(errorPokemon || errorTypes) && (
                        <div className="text-[2rem] tracking-[1px] text-center text-white font-bold">
                            Erreur lors du chargement des Pokémons!
                        </div>
                    )}

                    {!isPendingPokemon && filteredPokemons.length === 0 ? (
                        <div className="text-[2rem] tracking-[1px] text-center text-white font-bold">
                            Aucun Pokémon trouvé avec ces critères
                        </div>
                    ) : (
                        filteredPokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} types={typesData} />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}

export default PokemonList;
