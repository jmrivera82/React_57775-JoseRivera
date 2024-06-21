import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemCount from "./componentes/ItemCount.jsx"
import ProductDetail from "./componentes/ProductDetail.jsx"
import Category from "./componentes/Category.jsx"


function App (){

  return (
    <>
      <Router>
          <Header/>
          <h2>Catálogo de Productos</h2>
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/category/:categoryName" element={<Category />} />

              {/*<ItemListContainer/>*/}
          </Routes>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>

          <Main/>
          <Footer/>
      </Router>
    </>

    )

}

export default App
