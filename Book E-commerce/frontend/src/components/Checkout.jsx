import React, { useContext } from 'react'
import cartContext from '../pages/Cart/CartContext'

const Checkout = () => {
    const {clearCart, handleCheckout, itemCount, total} = useContext(cartContext);

  return (
    <div>
      <p>Total Items:</p>
      <h4>{itemCount}</h4>
      <p>ORDER TOTAL</p>
      <h4>${total}</h4>
      <hr />
      <div>
        <button onClick={handleCheckout}>CHECKOUT</button>
        <button onClick={clearCart}>CLEAR</button>
      </div>
    </div>
  )
}

export default Checkout
