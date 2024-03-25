import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/category/Remeras" className="dropdown-item">Remeras</Link></li>
                <li><Link to="/category/Buzos" className="dropdown-item">Buzos</Link></li>
                <li><Link to="/category/Pantalones" className="dropdown-item">Pantalones</Link></li>
              </ul>
            </li>
          </ul>

        </div>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;