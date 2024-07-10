import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from './CartContext';
import CartItem from './CartItem';
import Checkout from '../../components/Checkout';

const Cart = () => {
    const { cartItems, checkout, clearCart } = useContext(cartContext);
  return (
    <main>
        <section className='cart-header'>
            <h2>Your Cart</h2>
        </section>
        {checkout && (<section className='cart-msg'>
           <h4> Thanks for your order!</h4>
           <p>
                Our team is gathering your books and they will be ready for pickup within 24 hours!
            </p>
            <Link to='/titles' onClick={clearCart}>
                Continue Browsing
            </Link> 
        </section>)}
        <section className='cart-items'>
            <div>
                {
                    <div>
                        {cartItems.length===0 && !checkout ? (
                            <h4>Your cart is empty! Take a look at our stock and find your next read!</h4>
                        ) : (
                                <ul>
                                {cartItems.map((book) => (
                                    <CartItem key={book.id} book={book} />
                                ))}
                                </ul>
                        )}
                    </div>
                }
            </div>
        </section>
        <section>
            {cartItems.length > 0 && <Checkout />}
        </section>
    </main>
  )
}

export default Cart
