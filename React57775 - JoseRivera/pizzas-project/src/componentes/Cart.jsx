
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext.jsx'
import '../estilos/Cart.scss'

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  console.log('Cart:', cart)

  const handleFinalizePurchase = () => {
    clearCart()
    navigate('/empty')
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                  <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.nombre}</h3>
                    <p>{item.quantity} x ${item.precio}</p>
                    <p>Total: ${item.quantity * item.precio}</p>
                  </div>
              </li>
            ))}
          </ul>
          <button onClick={handleFinalizePurchase} className="finalize-button">Finalizar Compra</button>
        </div>
      )}
    </div>
  )
}

export default Cart
