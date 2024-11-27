import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function PokemonSlider({ pokemonData, pokemonID, language }) {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(pokemonID - 1);
    const initialIndex = pokemonData.findIndex(poke => poke.id === pokemonID);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
        centerMode: true,
        touchThreshold: 10,
        initialSlide: initialIndex,
        afterChange: (current) => {
            setCurrentSlide(current);
            const newPokemonID = pokemonData[current].id;
            navigate(`/pokemon/${newPokemonID}`);
        },
    };

    return (
        <>
            <div className="relative">
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[15px] 
                border-l-transparent border-r-[15px] border-r-transparent border-t-[18px] border-t-[#111827] z-10 pointer-events-none"></div>
                <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[15px] 
                border-l-transparent border-r-[15px] border-r-transparent border-b-[18px] border-b-[#111827] z-10 pointer-events-none"></div>
                <Slider {...settings}>
                    {pokemonData.map((poke, index) => (
                        <div key={poke.id} className={`p-2 ${index === currentSlide ? "transition-transform duration-300 animate-float" : ""}`}>
                            <img
                                src={poke.image}
                                alt={poke.names[language]}
                                className="h-26 w-26 object-cover rounded-full mx-auto"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default PokemonSlider;
