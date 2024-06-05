import '../estilos/Header.scss'
import Navbar from './Navbar.jsx'


function Header (){

    return (
        <header>
            <h1>PIZZA'S CATA</h1>
            <Navbar isHeader={true} />

        </header>
    )
    
    }
    
    export default Header