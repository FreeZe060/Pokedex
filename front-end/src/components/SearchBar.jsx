function SearchBar() {
    return (
        <section id="home" class="mt-[88px] mb-[3rem] bg-center h-[25vh] min-h-[25rem] relative">
            <div class="w-full h-full m-0 flex flex-col justify-center items-center relative">
                <h2 class="text-[4rem] tracking-[1px] text-center text-white font-extrabold">Pokemons :</h2>
                <input type="text" maxlength="12" id="search-input" placeholder="Rechercher..." class="text-[2.4rem] w-[70rem] h-[6rem] min-w-[25rem] max-w-[85%] border-0 outline-none rounded-[10rem] p-[3rem] px-[4rem] transition-all duration-500 delay-100 hover:w-[77rem] hover:h-[7rem]" />
            </div>
        </section>
    );
}

export default SearchBar;