import React from 'react';
import Logo from '../../logo.webp';
import './header.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function HeaderComponent() {
  return (
    <div className="header">
        <img className="header-logo" src={Logo} alt=""/>
       <div className="menu">
            <Link className="menu-items" to={ROUTES.HOME}>Home</Link>
            <Link className="menu-items" to={ROUTES.ABOUT}>About</Link>
            <Link className="menu-items" to={ROUTES.HOME}>Services</Link>
            <Link className="menu-items" to={ROUTES.HOME}>Gallery</Link>
            <Link className="menu-items" to={ROUTES.HOME}>Instagram</Link>
            <Link className="menu-items" to={ROUTES.CONTACT}>Contact</Link>
            <Link className="menu-items" to={ROUTES.HOME}>Shop</Link>
       </div>
    </div>
  );
}

export default HeaderComponent;
