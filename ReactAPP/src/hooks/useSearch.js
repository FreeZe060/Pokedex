import { useState } from "react";

function useSearch() {
    const [searchTerm, setSearchTerm] = useState(() => {
        return localStorage.getItem("searchterm") || "";
    });

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        localStorage.setItem("searchterm", term);
    };

    return { searchTerm, handleSearchChange };
}

export default useSearch;
