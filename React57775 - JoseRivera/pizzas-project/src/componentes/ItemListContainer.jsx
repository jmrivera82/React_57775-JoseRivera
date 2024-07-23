import '../estilos/ItemListContainer.scss'
import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { fetchProducts } from "./Products.jsx"
import ItemCount from './ItemCount.jsx'
import { CartContext } from './CartContext.jsx'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { addToCart } = useContext(CartContext)

    
    useEffect(() => {
      fetchProducts().then((data) => {
        setProducts(data)
        setLoading(false)
      })
    }, [])
  
    if (loading) {
      return <div>Loading...</div>
    }
  
    return (
      <div className="item-list-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <div className="product-details">
              <h3>{product.nombre}</h3>
              <p>Precio: ${product.precio}</p>
              <ItemCount
              initial={1}
              stock={product.stock}
              onAdd={(quantity) => {
                console.log(`Agregando ${quantity} de ${product.nombre} al carrito desde el catálogo`); // Debugging
                addToCart(product, quantity);
              }}
            />
            <Link to={`/product/${product.id}`} className="view-details-link">
              Ver detalles
            </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemListContainer




  

