import '../estilos/ItemListContainer.scss'
import React, { useState, useEffect } from 'react'

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      // Simulación de una llamada a una API para obtener los elementos
      const fetchItems = () => {
        setTimeout(() => {
          setItems([
            { id: 1, name: 'Pizza 4 Quesos' },
            { id: 2, name: 'Pizza Napolitana' },
            { id: 3, name: 'Pizza Finas Hierbas' },
            { id: 4, name: 'Pizza Española' },
            { id: 5, name: 'Pizza Especial Cata' },
            { id: 6, name: 'Pizza Personalizada' },
          ]);
        }, 1000)
      }
  
      fetchItems()
    }, [])
  
    return (
      <div className="item-list-container">
        <h1>{saludo}</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default ItemListContainer;

