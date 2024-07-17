import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from './CartContext';
import CartItem from './CartItem';
import Checkout from '../../components/Checkout';
import '../../styles/cart.css'

const Cart = () => {
    const { cartItems, checkout, browse} = useContext(cartContext);
  return (
    <main className='cart'>
        {checkout && (<section className='cart-msg'>
           <h4> Thanks for your order!</h4>
           <p>
                Our team is gathering your books and they will be ready for pickup within 24 hours!
            </p>
            <Link className='browse-link' to='/titles' onClick={browse}>
                Continue Browsing
            </Link> 
        </section>)}
        
        { !checkout && (
            <div className='cart-wrapper'>
                {cartItems.length===0 ? (
                    <h4>Your cart is empty! Take a look at our stock and find your next read!</h4>
                ) : (
                    <section  className='cart-items'>
                        <div className='cart-header'>
                            <h2>Review Your Cart</h2>
                        </div>
                        <table className='cart-table'>
                            <thead>
                                <tr className='cart-header-sticky cart-row'>
                                <th
                                    scope="col"
                                    className='cart-header-col'
                                >
                                    Book
                                </th>
                                    <th
                                        scope="col"
                                        className='cart-header-col'
                                    >
                                    Price
                                    </th>
                                    <th
                                        scope="col"
                                        className='cart-header-col'
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className='cart-header-col'
                                    >
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((book) => (
                                <CartItem className='cart-row' key={book.id} book={book} />
                            ))}
                            </tbody>
                        </table>
                    </section>
                )}
            </div>

        )}
        <section class='cart-checkout'>
            {cartItems.length > 0 && <Checkout />}
        </section>
    </main>
  )
}

export default Cart
