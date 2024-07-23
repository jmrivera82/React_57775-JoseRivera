import '../estilos/Header.scss'
import CartWidget from './CartWidget.jsx'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props){

    if (props.isHeader == true ) {
        return(
            <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">Mi Tienda</Link>
              <div className="navbar-links">
                <Link to="/category/pizzas">Pizzas</Link>
                <Link to="/category/bebidas">Bebidas</Link>
                <Link to="/category/promociones">Promociones</Link>
                <Link to="/cart">Carrito</Link>
              </div>
            </div>
            <CartWidget/>
          </nav>
        )
    } else {
        return(
            <nav className="navbar">
                <ul className="navbar-links">
                    <li>
                        <Link to="/category/nuestraEmpresa">Nuestra Empresa</Link>
                    </li>
                    <li>
                        <Link to="/category/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/category/ubicacion">Ubicación</Link>
                    </li>
                </ul>
  
            </nav>
        )
    }
    
        
}

export default Navbar