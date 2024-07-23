
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "./Products.jsx"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then((data) => {
      const selectedProduct = data.find((product) => product.id === parseInt(id))
      setProduct(selectedProduct)
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return <div>CARGANDO...</div>
  }

  if (!product) {
    return <div>PRODUCTO NO ENCONTRADO..</div>
  }

  return (
    <div className="product-detail">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>PRECIO: ${product.precio}</p>
      <p>INGREDIENTES: {product.ingredientes}</p>
    </div>
  )
}

export default ProductDetail