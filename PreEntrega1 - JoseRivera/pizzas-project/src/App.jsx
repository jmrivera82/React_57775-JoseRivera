import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import React from "react"

function App (){

  return (
    <>
      <Header/>
      <ItemListContainer saludo="Bienvenido a Pizza's Cata" />
      <Main/>
      <Footer/>
    </>
    )

}

export default App
