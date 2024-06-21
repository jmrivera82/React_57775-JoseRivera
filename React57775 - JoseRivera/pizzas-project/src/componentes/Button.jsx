//import {useState} from "React"

function Button(props){

//    const arrayDeValores = useState("Valor inicial")
//    const miEstado = arrayDeValores[0]
    const hacerClick = () => {
        console.log("click")
    }
    return(

        <button className="btn">{props.texto}</button>
    )

}

export default Button