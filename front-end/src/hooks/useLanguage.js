import { useState, useEffect } from "react";

export function useLanguage() {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "fr";
    });

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    return { language, changeLanguage };
}
