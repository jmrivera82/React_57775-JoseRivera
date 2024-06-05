import '../estilos/Header.css'

function Navbar (){
    return(
        <nav className="navbar">
        <a href="#inicio">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Promociones</a>
        <a href="#">Arma Tu Pizza</a>
        <a href="#">Contácto</a>   
      </nav>
    )
}

export default Navbar