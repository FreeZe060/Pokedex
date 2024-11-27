function SearchBar({ searchterm, onSearch }) {

    const handleInputChange = (e) => {
        const value = e.target.value;
        onSearch(value);
    };

    return (
        <section id="home" class="mt-[88px] bg-center h-[25vh] min-h-[25rem] relative">
            <div class="w-full h-full m-0 flex flex-col justify-center items-center relative">
                <h2 class="text-[3rem] tracking-[1px] text-center text-white font-bold">POKEMONS</h2>
                <input type="text" maxLength="12" id="search-input" placeholder="Rechercher..." value={searchterm} onChange={handleInputChange}
                    class="text-[1.4rem] w-[60rem] h-[4rem] min-w-[25rem] max-w-[85%] border-0 outline-none rounded-[10rem] p-[1rem] px-[2rem] transition-all duration-500 delay-100 hover:w-[67rem] hover:h-[4.5rem]" />
            </div>
        </section>
    );
}

export default SearchBar;