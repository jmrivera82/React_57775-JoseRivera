import '../estilos/ItemCount.scss'
import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const handleAdd = () => {
      if (count < stock) {
        setCount(count + 1)
      }
    }
  
    const handleRemove = () => {
      if (count > 1) {
        setCount(count - 1)
      }
    }
  
    const handleAddToCart = () => {
      console.log(`Agregando ${count} items al carro`)
      onAdd(count)
    }

    return (
      <div className="item-count">
        <div className="controls">
          <button onClick={handleRemove}>-</button>
          <span>{count}</span>
          <button onClick={handleAdd}>+</button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart">
          Agregar al carrito
        </button>
      </div>
    )
}

export default ItemCount