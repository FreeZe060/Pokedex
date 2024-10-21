import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routing/Home';
import PokemonInfo from './routing/PokemonInfo';

import NavBar from './components/NavBar';
import { useLanguage } from './hooks/useLanguage';

function App() {

	const { language, changeLanguage } = useLanguage();

	return (
		<Router>
            <NavBar language={language} onLanguageChange={changeLanguage}></NavBar>
            <Routes>
                <Route path="/" element={<Home language={language}/>} />
                <Route path="/pokemon/:id" component={PokemonInfo} />
            </Routes>
        </Router>
	);
}

export default App;
