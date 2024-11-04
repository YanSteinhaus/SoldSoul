import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Perfil.css';

const Perfil = () => {
    const { name } = useParams();
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="perfil-container">
            <h1 className="perfil-title">Perfil de {name}</h1>
            <div className="perfil-content">
                <p>Este é o perfil de {name}.</p>
                <div className="likes">
                    <button className="like-button" onClick={handleLike}>❤️ Like</button>
                    <span>{likes} likes</span>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
