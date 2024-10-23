import React from 'react'
import { NavLink } from 'react-router-dom';
import BRAND_LOGO from '../assets/img/logo.png';

const Navbar = () => {
    return (
        <section id="header">
            <div className="brand">
                <NavLink to=""><img src={BRAND_LOGO} alt="logo" className="logo" /></NavLink>
            </div>
            <div className="menu">
                <ul id="navbar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li className="lg_bag"><NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink></li>
                    <NavLink to="#"><i className="fas fa-times" id="close"></i></NavLink>
                </ul>
            </div>
            <div className="menu_btn">
                <NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink>
                <i className="fas fa-outdent" id="bar"></i>
            </div>
        </section>
    )
}

export default Navbar