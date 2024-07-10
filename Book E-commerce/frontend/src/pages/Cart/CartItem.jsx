import React, { useContext } from 'react'
import cartContext from './CartContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = (props) => {
    const {removeFromCart, increase, decrease} = useContext(cartContext);

    const { book } = props;

  return (
    <div className='cart-item'>
        <div className='cart-item-book'>
            <img className='cart-item-img' src={book.image} alt={book.title} />
            <div className='cart-item-bookdetails'>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </div>
        <div className='btn-container'>
            <button 
                className='cart-item-btn'
                onClick={() => increase(book)}
            >
                <AddCircleOutlineIcon />
            </button>
            <div className='cart-item-quantity'>
                <p>{book.quantity}</p>
            </div>
            {book.quantity > 1 && (
                <button className='cart-item-btn' onClick={() => decrease(book)}>
                    <RemoveCircleOutlineIcon />
                </button>
            )}
            <button className='cat-item-btn' onClick={() => removeFromCart(book)}>
                <DeleteOutlineIcon />
            </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
