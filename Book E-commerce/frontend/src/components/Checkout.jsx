import React, { useContext } from 'react'
import cartContext from '../pages/Cart/CartContext'
import '../styles/checkout.css'
const Checkout = () => {
    const {clearCart, handleCheckout, itemCount, total} = useContext(cartContext);

  return (
    <div>
      <p>{`Total Items: ${itemCount}`}</p>
      <p>{`Order Total: $${total}`}</p>
      <hr solid color='rgb(6,36,6)' />
      <div>
        <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
        <button className='checkout-btn' onClick={clearCart}>Clear</button>
      </div>
    </div>
  )
}

export default Checkout
