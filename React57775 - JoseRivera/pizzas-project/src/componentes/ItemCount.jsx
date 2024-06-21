import '../estilos/ItemCount.scss'
import { useState } from "React"

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='item-count'>
            
                <button className='Button' onClick={decrement}>-</button>
                <span className='Number'>{quantity}</span>
                <button className='Button' onClick={increment}>+</button>
                
            
                <button className='Button' onClick={()=>onAdd (quantity)} disabled ={stock}>
                    Agregar al carrito
                </button>
        
        </div>
    )

}

export default ItemCount