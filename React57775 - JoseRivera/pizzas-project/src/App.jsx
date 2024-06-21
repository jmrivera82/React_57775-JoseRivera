import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemCount from "./componentes/ItemCount.jsx"
import React from "react"

function App (){

  return (
    <>
      <Header/>
      <h2>Catálogo de Productos</h2>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
      <Main/>
      <Footer/>
    </>
    )

}

export default App
