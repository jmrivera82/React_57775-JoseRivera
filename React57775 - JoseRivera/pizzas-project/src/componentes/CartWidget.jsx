
import  {FaShoppingCart}  from "react-icons/fa"
import '../estilos/CartWidget.scss'

function CartWidget () {
    const cartCount = 10

    return (
        <div className="cart-widget">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </div>
      )
}

export default CartWidget