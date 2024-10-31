import { useState } from "react";

export function useLanguage() {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "fr";
    });

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    return { language, changeLanguage };
}
