import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const handlePerfil = (friendName) => {
        navigate(`/perfil/${friendName}`);
    };

    const handlePostar = () => {
        navigate("/Postar");
    };

    return (
        <div className="header-container">
            <h1>Sua Alma vendida atravez do seu tempo</h1>
            
        </div>
    );
}

export default Header;
