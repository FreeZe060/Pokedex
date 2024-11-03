import React from 'react';
import { useParams } from 'react-router-dom';

import { useLanguageContext } from '../contexts/LanguageContext';
import { usePokemonContext } from '../contexts/PokemonContext';

function PokemonDetails() {

    const { id } = useParams();

    const { language } = useLanguageContext();

    console.log('LoadingPokemonDetails', usePokemonContext());
    const { pokemonData, typesData, isPendingPokemon, isPendingTypes } = usePokemonContext();
    if (isPendingPokemon || isPendingTypes) return <p>Loading details...</p>;
    if (!pokemonData || !typesData) return <p>Failed to load data...</p>;

    const pokemon = pokemonData[id-1]
    
    return (
        <section id="PokemonDetails" class="flex mt-[88px] mb-[3rem] bg-center h-[25vh] min-h-[25rem] relative">
            <div class="w-full h-full m-0 flex flex-col justify-center items-center relative">
                <h1 class="text-[4rem] tracking-[1px] text-center text-white font-extrabold m-8 pt-8">{pokemon.names[language]}  ({`N°${pokemon.id.toString().padStart(3, '0')}`})</h1>
                <div class="flex bg-white justify-center flex-col rounded-3xl p-[5rem] w-[50rem]">
                    <div class="flex rounded-3xl justify-center h-[10rem] items-center bg-slate-200">
                        <img src={pokemon.image} alt={pokemon.name} class="h-[100%]" />
                    </div>
                    <h1>{pokemon.names[language]}</h1>
                    
                </div>
            </div>
		</section>
    );
}

export default PokemonDetails;
