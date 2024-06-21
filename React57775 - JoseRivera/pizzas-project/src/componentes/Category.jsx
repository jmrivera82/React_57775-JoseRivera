import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts } from './Products.jsx'
import '../estilos/Category.scss'

const Category = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then((data) => {
      const filteredProducts = data.filter((product) => product.categoria === categoryName)
      setProducts(filteredProducts)
      setLoading(false)
    })
  }, [categoryName])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (products.length === 0) {
    return <div>No hay productos en esta categoría</div>
  }

  return (
    <div className="category">
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <div className="product-details">
              <h3>{product.nombre}</h3>
              <p>PRECIO: ${product.precio}</p>
              <Link to={'/product/${product.id}'} className="view-details-link">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
