import React, { useState, useEffect } from 'react';

const TypeSelection = ({ types, langage, onTypeChange }) => {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (types) {
            const formattedOptions = Object.entries(types).map((type) => ({
                value: type[0],
                text: type[1].translations[langage],
                backgroundColor: type[1].backgroundColor,
                selected: false,
            }));
            setOptions(formattedOptions);

            const savedTypes = localStorage.getItem('selectedTypes');
            if (savedTypes) {
                const selectedL = JSON.parse(savedTypes);
                const updatedSelected = formattedOptions
                    .filter((option) => selectedL.includes(option.value))
                    .map((option) => option.value);
                setSelected(updatedSelected);
            }
        }
    }, [types, langage]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    const selectOption = (index) => {
        const option = options[index];
        if (!option) return;

        const updatedSelected = selected.includes(option.value)
            ? selected.filter((value) => value !== option.value)
            : [...selected, option.value];

        setSelected(updatedSelected);
        onTypeChange(updatedSelected);
        localStorage.setItem('selectedTypes', JSON.stringify(updatedSelected));
    };

    const removeOption = (value) => {
        const updatedSelected = selected.filter((item) => item !== value);
        setSelected(updatedSelected);
        onTypeChange(updatedSelected);
        localStorage.setItem('selectedTypes', JSON.stringify(updatedSelected));
    };

    return (
        <div className="w-[90%] md:w-1/2 flex flex-col items-center mx-auto">
            <form>
                <input name="values" type="hidden" value={selected.join(',')} />
                <div className="inline-block relative min-w-64">
                    <div className="flex flex-col items-center relative">
                        <div onClick={toggleDropdown} className="w-full">
                            <div className="my-2 p-1 flex border border-gray-200 shadow-hover bg-white cursor-pointer rounded-xl">
                                <div className="flex flex-auto flex-wrap">
                                    {selected.map((value) => {
                                        const option = options.find((opt) => opt.value === value);
                                        if (!option) return null;
                                        return (
                                            <div
                                                key={option.value}
                                                style={{
                                                    backgroundColor: option.backgroundColor,
                                                    boxShadow: `0 4px 10px ${option.backgroundColor}`,
                                                }}
                                                className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-white"
                                            >
                                                <div className="text-xs font-bold leading-none max-w-full flex-initial">
                                                    {option.text}
                                                </div>
                                                <div
                                                    className="flex flex-auto flex-row-reverse cursor-pointer"
                                                    onClick={() => removeOption(option.value)}
                                                >
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        role="button"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0 c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183 l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15 C14.817,13.62,14.817,14.38,14.348,14.849z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {selected.length === 0 && (
                                        <div className="flex-1">
                                            <input
                                                placeholder="Filtre par Type..."
                                                className="bg-transparent p-1 px-2 appearance-none cursor-pointer outline-none h-full w-full text-gray-800"
                                                readOnly
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                    <button
                                        type="button"
                                        className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                                    >
                                        {isOpen ? (
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83 c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z" />
                                            </svg>
                                        ) : (
                                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                                <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83 c-0.27-0.268-0.707-0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25 L17.418,6.109z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div
                                className="absolute shadow bg-white z-40 w-full max-h-select overflow-y-auto rounded-xl top-[100%]"
                                onMouseLeave={closeDropdown}
                            >
                                <div className="flex flex-col w-full">
                                    {options.map((option, idx) => (
                                        <div key={option.value} className={`cursor-pointer w-full`} onClick={() => selectOption(idx)}>
                                            <div className={`flex w-full p-2 pl-2`}>
                                                <div style={{ color: option.backgroundColor }} className={`mx-2 px-2 leading-6 font-bold`}>{option.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TypeSelection;