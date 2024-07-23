import React, { useContext } from 'react'
import { CartContext } from './CartContext.jsx'
import '../estilos/Checkout.scss'

const Checkout = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
    return (
      <div className="checkout">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <div>
            <ul className="checkout-items">
              {cart.map((item) => (
                <li key={item.id} className="checkout-item">
                  <img src={item.imagen} alt={item.nombre} className="checkout-item-image" />
                  <div className="checkout-item-details">
                    <h3>{item.nombre}</h3>
                    <p>{item.quantity} x ${item.precio}</p>
                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={clearCart} className="clear-button">Finalizar Compra</button>
          </div>
        )}
      </div>
    )
  }
  
  export default Checkout