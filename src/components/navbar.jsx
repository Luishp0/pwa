import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Bienvenidos IAmmaster</div>
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Imagenes</li>
        <Link to={"/login"}><li className="nav-item">Iniciar sesion</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
