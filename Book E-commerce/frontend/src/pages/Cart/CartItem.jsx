import React, { useContext } from 'react'
import cartContext from './CartContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom'
import '../../styles/cartItem.css'


const CartItem = (props) => {
    const {removeFromCart, increase, decrease} = useContext(cartContext);

    const { book } = props;

  return (
    <tr className='cart-item'>
        <td className='cart-item-col cart-item-book'>
            <Link to={`/bookpage/${book.id}`}>
                <img className='cart-item-img' src={book.image} alt={book.title} />
            </Link>
            <div className='cart-item-title'>{book.title}</div>
        </td>
        <td className='cart-item-col'>
            <div className='cart-item-price'>
                <p>{`$${book.price.toFixed(2)}`}</p>
            </div>
        </td>
        <td className='cart-item-col'>
        <div className='btn-container'>
            {
                <button className='cart-item-btn' 
                    onClick={() => { 
                        book.quantity>1 ?
                        decrease(book) : removeFromCart(book)}
                    }
                    >
                    <RemoveCircleOutlineIcon />
                </button>
            }
            <div className='cart-item-quantity'>
                <p>{book.quantity}</p>
            </div>
            <button 
                className='cart-item-btn'
                onClick={() =>
                    {if(book.stock>book.quantity) {
                        increase(book);
                    }
                    }
                }
            >
                <AddCircleOutlineIcon />
            </button>
            </div>
        </td>
        <td className='cart-item-col'>
        <div className='cart-item-total'>
                <p>{`$${(book.price*book.quantity).toFixed(2)}`}</p>
            </div>
        </td>
    </tr>
  )
}

export default CartItem
