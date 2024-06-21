import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemCount from "./componentes/ItemCount.jsx"
import ProductDetail from "./componentes/ProductDetail.jsx"


function App (){

  return (
    <>
      <Router>
          <Header/>
          <h2>Catálogo de Productos</h2>
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/*<ItemListContainer/>
              <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>*/}
          </Routes>
          <Main/>
          <Footer/>
      </Router>
    </>

    )

}

export default App
