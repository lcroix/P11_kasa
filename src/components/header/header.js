import React from 'react';
import kasaImg from '../../data/asset/LOGO.png'
import { NavLink } from 'react-router-dom';
import './header.css'
function Header() {
    return (
        <div className='main'>
        <div className='header'>
            <img src={kasaImg} alt='logo kasa'></img>
        <nav>
            <ul className='navBar'>
                <NavLink className='link' to='/' style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "none" : "underline",
                            };
                        }}><li>Accueil</li></NavLink>
                <NavLink className='link' to='/About' style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "none" : "underline",
                            };
                        }}><li>A Propos</li></NavLink>
            </ul>
        </nav>
        </div>

        </div>
        
    )
}
export default Header;