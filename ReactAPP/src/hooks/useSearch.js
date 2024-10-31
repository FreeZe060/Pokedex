import { useState } from "react";

function useSearch(initialValue = "") {
    const [searchTerm, setSearchTerm] = useState(initialValue);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    return {
        searchTerm,
        handleSearchChange,
    };
}

export default useSearch;
