import React from 'react';
import { useLocation } from 'react-router-dom';

function PokemonInfo() {
    
    const location = useLocation();
    const { pokemon } = location.state || {};

    return (
        <>
            <img src={pokemon.image} class="h-[100%]"/>
		</>
    );
}

export default PokemonInfo;
