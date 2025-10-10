import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div className="texto">
                <h1>404</h1>
                <p>Página não encontrada.</p>
            </div>
            <Link to="/" className="botaoInicio">INÍCIO</Link>
        </div>
    )
}

export default NotFound;