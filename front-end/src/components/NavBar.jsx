import logo from './../logoPoke.svg';

function NavBar() {
    return (
        <header class="fixed top-0 w-screen z-10 bg-[#001353] shadow-navbar">
            <div class="flex items-center justify-between p-4 px-20 max-h-[88px]">
                <div class="flex items-center cursor-pointer text-white">
                    <div class="w-[22vmin] mr-6">
                        <img src={logo} alt="Logo Poke" class="w-full h-full object-cover object-center block"/>
                    </div>
                </div>

                <div>
                    <ul class="flex">
                        <li class="m-0">
                            <a href="./#home" class="p-[2.2rem] px-[3rem] inline-block text-[1.6rem] uppercase tracking-[1px] font-bold text-white transition hover:translate-y-[-2px] duration-300"> Home </a>
                        </li>
                        <li class="m-0">
                            <a href="./#about" class="p-[2.2rem] px-[3rem] inline-block text-[1.6rem] uppercase tracking-[1px] font-bold text-white transition hover:translate-y-[-2px] duration-300"> Infos </a>
                        </li>
                        {/* <li class="header_link-li">
                        <a href="./#projects" class="header_link"> Projets </a>
                    </li>
                    <li class="header_link-li important-link">
                        <a href="./contact" class="header_link"> Contact </a>
                    </li> */}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;