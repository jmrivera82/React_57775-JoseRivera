import Button from "./Button.jsx"
import "../estilos/Button.scss"

function Main(){
    return (
        <main>

        <img src="/pizza-española.jpg" alt ="imagen" />
        <img src="/pizza-cata.jpg" alt ="imagen" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit repellendus, amet laborum fugit obcaecati ea reprehenderit eaque consequatur nam, fugiat praesentium aut aliquid veniam facilis eveniet ipsa nihil ipsum porro?</p>
        <Button texto="ver mas" />
        <Button texto="detalle" /> 


        </main>
    )
}

export default Main