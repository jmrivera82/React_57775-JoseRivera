import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import ItemListContainer from "./componentes/ItemListContainer.jsx"
import ItemCount from "./componentes/ItemCount.jsx"
import ProductDetail from "./componentes/ProductDetail.jsx"
import Category from "./componentes/Category.jsx"
/*10*/
import Cart from "./componentes/Cart.jsx"
import { CartProvider } from "./componentes/CartContext.jsx"
import EmptyPage from "./componentes/EmptyPage.jsx"
import Checkout from "./componentes/Checkout.jsx"

function App (){

  return (
    <>
      <CartProvider>
        <Router>
            <Header/>
            <h2>Catálogo de Productos</h2>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/empty" element={<EmptyPage />} />
                <Route path="/checkout" element={<Checkout />} /> 
            </Routes>
            <Main/>
            <Footer/>
        </Router>
      </CartProvider>
    </>

    )

}

export default App
