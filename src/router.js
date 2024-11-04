import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componente/Header';
import Postar from './pages/Postar/Postar';
import Perfil from './pages/Perfil/Perfil';
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/Postar" element={<Postar />} />
                <Route path="/perfil/:name" element={<Perfil />} />
            </Routes>
        </Router>
    );
}

export default App;
