import '../estilos/ItemCount.scss'
import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increment = () =>{
        if (count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
          setCount(count - 1)
        }
      }

      return (
        <div className="item-count">
          <button onClick={decrement} disabled={count <= 1}>-</button>
          <span>{count}</span>
          <button onClick={increment} disabled={count >= stock}>+</button>
          <button onClick={() => { console.log(`Agregando ${count} item al carrito`), onAdd(count) }} className="add-to-cart">
            Agregar al carrito
          </button>
        </div>
      )

}

export default ItemCount