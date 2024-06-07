import '../estilos/Header.scss'
function Navbar (props){

    if (props.isHeader == true ) {
        return(
            <nav className="navbar">
                <a href="#inicio">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Promociones</a>
                <a href="#">Arma Tu Pizza</a>
                <a href="#">Login</a>   
            </nav>
        )
    } else {
        return(
            <nav className="navbar">
                <a href="#">Nuestra Empresa</a>
                <a href="#">Contácto</a>
                <a href="#">Ubicación</a>
  
            </nav>
        )
    }
    
        
}

export default Navbar