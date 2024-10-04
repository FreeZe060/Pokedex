const PokemonCard = ({ pokemon, langage, types }) => {
    return (
        <div class="flex bg-white justify-center rounded-3xl p-[2rem] m-8 w-[30rem] shadow-navbar transition hover:translate-y-[-2px] duration-300 transition hover:shadow-hover duration-300 cursor-pointer">
            <div class="w-full">
                <div class="flex rounded-3xl justify-center items-center bg-slate-200 h-[120px] mb-3">
                    <img src={pokemon.image} alt={pokemon.names[langage]} class="h-[100%]"/>
                </div>
                <h6 class="font-titre text-3xl text-gray-700 text-center font-semibold">{pokemon.names[langage]}</h6>
                <div class="flex flex-row justify-center">
                    {pokemon.types && pokemon.types.map((type) => (
                        <p class="rounded-full m-2 p-[0.6rem] px-[1rem] text-base capitalize font-bold text-white transition hover:translate-y-[-2px] duration-300" 
                        style={{ backgroundColor: types[type]["backgroundColor"],boxShadow: `0 4px 10px ${types[type]["backgroundColor"]}`}}>{types[type]["translations"][langage]}</p>
                    ))}
                </div>
                <li class="text-xl font-bold text-gray-500 mt-[0rem]">{`N°${pokemon.id.toString().padStart(3, '0')}`}</li>
            </div>
        </div>
    );
};

export default PokemonCard;