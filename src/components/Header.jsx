import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="HeaderContainer">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Início
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cep" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            CEP
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;