import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import BRAND_LOGO from '../assets/img/logo.png';

const Navbar = () => {

    const [showHide, setShowHide] = useState(true)

    return (
        <section id="header">
            <div className="brand">
                <NavLink to=""><img src={BRAND_LOGO} alt="logo" className="logo" /></NavLink>
            </div>
            <div className="menu">
                <ul id="navbar" className={!showHide ? 'active' : ''}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li className="lg_bag"><NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink></li>
                </ul>
            </div>
            <div className="menu_btn">
                <NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink>
                <i onClick={() => setShowHide(!showHide)} className={showHide ? "fas fa-outdent" : "fas fa-times"} id="bar"></i>
            </div>
        </section>
    )
}

export default Navbar