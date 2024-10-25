import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routing/Home';
import PokemonDetails from './routing/PokemonDetails';

import NavBar from './components/NavBar';
import { LanguageProvider } from './contexts/LanguageContext';
import { PokemonProvider } from './contexts/PokemonContext';

function App() {

	return (
        <LanguageProvider>
            <PokemonProvider>
                <Router>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
                    </Routes>
                </Router>
            </PokemonProvider>
        </LanguageProvider>
	);
}

export default App;
