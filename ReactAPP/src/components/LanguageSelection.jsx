function LanguageSelection({ onLangChange, language }) {

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        onLangChange(selectedLanguage);
    };

    return (
        <li class="m-0 flex items-center">
            <select onChange={handleLanguageChange} value={language} className="p-[0.5rem] inline-block text-[1.2rem] uppercase font-bold text-white rounded-xl bg-[#001340] cursor-pointer">
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="es">ES</option>
                <option value="it">IT</option>
                <option value="ko">KO</option>
                <option class="rounded-br-lg rounded-bl-lg" value="ja">JP</option>
            </select>
        </li>
    );
}

export default LanguageSelection;