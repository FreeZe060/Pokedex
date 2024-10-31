import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "fr");

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguageContext() {
    return useContext(LanguageContext);
}
