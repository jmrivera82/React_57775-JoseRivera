import '../estilos/Header.scss'
import CartWidget from './CartWidget'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props){

    if (props.isHeader == true ) {
        return(
            <nav className="navbar">
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/category/promociones">Promociones</Link>
                    </li>
                    <li>
                        <Link to="/category/productos">Productos</Link>
                    </li>
                </ul>
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