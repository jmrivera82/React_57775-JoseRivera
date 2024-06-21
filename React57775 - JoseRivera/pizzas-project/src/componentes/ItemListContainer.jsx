import '../estilos/ItemListContainer.scss'
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchProducts } from "./Products.jsx"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProductId, setSelectedProductId] = useState(null)
    const [cart, setCart] = useState([])

  
    useEffect(() => {

      fetchProducts().then((data) => {
          setProducts(data)
          setLoading(false)

      })
      
    }, [])
  
    const handleDetailClick = (productId) => {
      setSelectedProductId(selectedProductId === productId ? null : productId)
    }
  
    const handleAddToCart = (product) => {
      setCart([...cart, product])
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
              <p>Price: ${product.precio}</p>
              <button className="detail-button" onClick={() => handleDetailClick(product.id)}>
                {selectedProductId === product.id ? 'Esconder detalles' : 'Mostrar detalles'}
              </button>
              {selectedProductId === product.id && (
                <div className="product-extra-details">
                  <p>{product.detalles}</p>
                </div>
              )}
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </button>
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

