import { Link } from 'react-router-dom';

import logo from './../logoPoke.svg';
import LanguageSelection from './LanguageSelection';
import { useLanguageContext } from '../contexts/LanguageContext';

function NavBar() {

    const { language, changeLanguage } = useLanguageContext();

    return (
        <header class="fixed top-0 w-screen z-10 bg-[#001353] shadow-navbar">
            <div class="flex items-center justify-between p-4 px-20 max-h-[88px]">
                <div class="flex items-center cursor-pointer text-white">
                    <a href="/#home" class="w-[22vmin] mr-6">
                        <img src={logo} id="logo" alt="Logo Poke" class="w-full h-full object-cover object-center block" />
                    </a>
                </div>

                <div>
                    <ul class="flex">
                        <li class="m-0">
                            <Link to="/#home" class="p-[2.2rem] px-[3rem] inline-block text-[1.6rem] uppercase tracking-[1px] font-bold text-white transition hover:translate-y-[-2px] duration-300"> Home </Link>
                        </li>
                        <li class="m-0">
                            <Link href="/#about" class="p-[2.2rem] px-[3rem] inline-block text-[1.6rem] uppercase tracking-[1px] font-bold text-white transition hover:translate-y-[-2px] duration-300"> Infos </Link>
                        </li>
                        <LanguageSelection onLangChange={changeLanguage} language={language}></LanguageSelection>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;