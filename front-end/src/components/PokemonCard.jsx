const PokemonCard = ({ pokemon, langage }) => {
    return (
        <div class="flex bg-white justify-center rounded-3xl p-[3rem] m-8 w-1/6 h-[w-1/6]" sx={{ borderRadius: '16px', boxShadow: 3, width: 200, margin: 2 }}>
            <div sx={{ textAlign: 'center' }}>
                <h6>{pokemon.names[langage]}</h6>
                <img src={pokemon.image} alt={pokemon.names[langage]} style={{ width: '100%', borderRadius: '8px' }} />
                <div sx={{ marginTop: 1 }}>
                    <li sx={{ margin: '2px' }}>{pokemon.types}</li>
                </div>
            </div>
        </div>
    );
};



export default PokemonCard;