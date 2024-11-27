import { Link } from 'react-router-dom';

import { useLanguageContext } from '../contexts/LanguageContext';

const PokemonCard = ({ pokemon, types }) => {

    const { language } = useLanguageContext();

    return (
        <Link to={`/pokemon/${pokemon.id}`} class="group flex bg-white justify-center rounded-3xl p-[1.5rem] m-6 w-[20rem] shadow-navbar hover:translate-y-[-2px] transition hover:shadow-hover duration-300 cursor-pointer">
            <div class="w-full">
                <div class="flex rounded-3xl justify-center items-center bg-slate-200 h-[100px] mb-3">
                    <img src={pokemon.image} alt={pokemon.names[language]} class="h-[100%] transition-transform duration-300 group-hover:animate-float"/>
                </div>
                <h6 class="font-titre text-xl text-gray-700 text-center font-semibold">{pokemon.names[language]}</h6>
                <div class="flex flex-row justify-center mb-1">
                    {pokemon.types && pokemon.types.map((type) => (
                        <p class="rounded-full m-1 p-[0.4rem] px-[0.6rem] text-xs capitalize font-bold text-white transition hover:translate-y-[-2px] duration-300" 
                        style={{ backgroundColor: types[type]["backgroundColor"],boxShadow: `0 4px 10px ${types[type]["backgroundColor"]}`}}>{types[type]["translations"][language]}</p>
                    ))}
                </div>
                <li class="text-l font-bold text-xs text-gray-500 mt-[0rem]">{`N°${pokemon.id.toString().padStart(3, '0')}`}</li>
            </div>
        </Link>
    );
};

export default PokemonCard;