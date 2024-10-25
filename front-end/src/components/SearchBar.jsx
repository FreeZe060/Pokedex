import useSearch from "../hooks/useSearch";

function SearchBar({ onSearch }) {

    const { searchTerm, handleSearchChange } = useSearch();

    const handleInputChange = (e) => {
        const value = e.target.value;
        handleSearchChange(value);
        onSearch(value);
    };

    return (
        <section id="home" class="mt-[88px] mb-[3rem] bg-center h-[25vh] min-h-[25rem] relative">
            <div class="w-full h-full m-0 flex flex-col justify-center items-center relative">
                <h2 class="text-[4rem] tracking-[1px] text-center text-white font-extrabold">POKEMONS</h2>
                <input type="text" maxLength="12" id="search-input" placeholder="Rechercher..." value={searchTerm} onChange={handleInputChange} class="text-[2.4rem] w-[70rem] h-[6rem] min-w-[25rem] max-w-[85%] border-0 outline-none rounded-[10rem] p-[3rem] px-[4rem] transition-all duration-500 delay-100 hover:w-[77rem] hover:h-[7rem]" />
            </div>
        </section>
    );
}

export default SearchBar;