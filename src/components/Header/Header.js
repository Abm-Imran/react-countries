import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className="nav-box">
                <nav className='nav-bar'>
                    <NavLink to={'/home'}> Home </NavLink>
                    <NavLink to={'/countries'}>Countries</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;