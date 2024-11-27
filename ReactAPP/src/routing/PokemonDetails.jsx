import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import { useLanguageContext } from '../contexts/LanguageContext';
import { usePokemonContext } from '../contexts/PokemonContext';

import ModalAttacks from '../components/ModalAttacks';
import PokemonSlider from '../components/PokemonSlider';

function PokemonDetails() {

    const { id } = useParams();

    const { language } = useLanguageContext();

    const [showModal, setShowModal] = useState(false);

    const { pokemonData, typesData, isPendingPokemon, isPendingTypes } = usePokemonContext();
    if (isPendingPokemon || isPendingTypes) return <p>Loading details...</p>;
    if (!pokemonData || !typesData) return <p>Failed to load data...</p>;

    const pokemon = pokemonData[id - 1]
    const lstTypes = pokemon.types.map(type => ({
        name: typesData[type].translations[language],
        color: typesData[type].backgroundColor
    }))

    return (
        <main class="pt-16 overflow-auto mt-[88px] overflow-x-hidden">
            <div class="px-6 py-8">
                <div class="max-w-4xl mx-auto">
                    <div class={`bg-white shadow-navbar bg-gradient-to-tr from-[${lstTypes[0].color}] via-white to-[${lstTypes[1]?.color ? lstTypes[1].color : lstTypes[0].color}] rounded-3xl p-8 mb-5`}>
                        <h1 class={`text-4xl font-bold mb-10`}>
                            {pokemon.names[language]}
                        </h1>
                        <div class="flex items-center justify-between">
                            <div class="flex items-stretch">
                                <img src={pokemon.image} alt={pokemon.names[language]} class="h-full transition-transform duration-300 hover:animate-float" />
                                <div class="h-200 border-l mx-4"></div>
                                <div class="flex flex-col gap-1 items-center justify-center">
                                    {lstTypes.map((type) => (
                                        <p class="rounded-full m-1 p-[0.4rem] px-[0.6rem] text-xs capitalize font-bold cursor-default text-white transition hover:translate-y-[-2px] duration-300"
                                            style={{ backgroundColor: type.color, boxShadow: `0 4px 10px ${type.color}` }}>{type.name}</p>
                                    ))}
                                </div>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <div class="inline-flex items-center justify-center h-9 px-3 rounded-xl border-2 cursor-default border-gray-900 text-gray-900 hover:text-gray-500 hover:border-gray-500 transition duration-300">
                                    <p class="font-bold">{`N°${pokemon.id.toString().padStart(3, '0')}`}</p>
                                </div>
                                <button  type="button" onClick={() => setShowModal(true)} className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                    Voir les Attaques
                                </button>
                            </div>
                        </div>

                        <hr class="my-10" />

                        <div class="grid grid-cols-2 gap-x-20">
                            <div>
                                <h2 class="text-2xl text-center text-gray-900 mb-4">Stats</h2>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="p-4 bg-gray-900 rounded-xl text-gray-100">
                                        <div class="font-bold text-xl leading-none">{pokemon.height}<span class="font-normal text-sm"> m</span></div>
                                        <div class="mt-2 font-bold">Taille</div>
                                    </div>
                                    <div class="p-4 bg-gray-900 rounded-xl text-gray-100">
                                        <div class="font-bold text-xl leading-none">{pokemon.weight}<span class="font-normal text-sm"> kg</span></div>
                                        <div class="mt-2 font-bold">Poids</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-2xl text-center text-gray-900 mb-4">Attaques</h2>

                                <div class="">
                                    <div class="p-4 bg-white border rounded-xl h-60 text-gray-900 space-y-2 overflow-y-auto">
                                        {pokemon.moves.map((move) => (
                                            <div class="flex bg-gray-900 text-white rounded-xl p-4 items-center justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="inline align-middle m-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                                <p class="capitalize">{move}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="inline align-middle m-1" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-4xl mx-auto">
                    <div class={`bg-white rounded-3xl py-4 mb-5 shadow-navbar`}>
                        <PokemonSlider pokemonData={pokemonData} pokemonID={pokemon.id} language={language} />
                    </div>
                </div>
            </div>

            <ModalAttacks show={showModal} onClose={() => setShowModal(false)} moves={pokemon.moves} />
        </main>

    );
}

export default PokemonDetails;
