import '../estilos/ItemListContainer.scss'
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchProducts } from "./Products.jsx"
import ItemCount from './ItemCount.jsx'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])

  
    useEffect(() => {

      fetchProducts().then((data) => {
          setProducts(data)
          setLoading(false)

      })
      
    }, [])
  
  const handleAddToCart = (product, quantity) => {
      setCart([...cart, { ...product, quantity }])
      console.log(`Agregando ${quantity} ${product.nombre} al carrito`)
  }


    if (loading) {
      return <div>Cargando...</div>
    }
    
    
    return (
      <div className="item-list-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <div className="product-details">
              <h3>{product.nombre}</h3>
              <p>PRECIO: ${product.precio}</p>
              <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => handleAddToCart(product, quantity)} />
              <Link to={`/product/${product.id}`} className="view-details-link">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default ItemListContainer

