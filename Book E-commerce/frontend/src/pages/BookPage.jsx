import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import '../styles/bookpage.css';
import cartContext from './Cart/CartContext';

const BookPage = () => {
  const data = useParams();
  const [book,setBook] = useState({});

  const { addToCart, increase, cartItems, sumItems, itemCount} = useContext(cartContext);
  /*fetches book data fresh, if multiple people are 
    using site, would need accurate picture of stock
    at time of viewing */
  useEffect(() => {
    async function fetchBook() {
      console.log('fetching book');
      /*["'Horror'"]*/
      const response = await axios.post('http://localhost:8000/bookcommerce/book',data);
      
      response.data.image ='https://'+ response.data.image.slice(8)
      setBook(response.data);
    }
    fetchBook();
  },[])

  const isInCart = (book) => {
    return cartItems.find((item) => item.id === book.id);
  };
  
  return (
    <>
      <main className='book-pg'>
        <section className='book-pg_img-container'>
          <nav className='book-pg_navlinks'>
            <Link to='/' className='book-pg_navlink'>
              Home
            </Link>
            {' '}/{' '} 
            <Link to='/titles' className='book-pg_navlink'>
              Books
            </Link>
            {' '}/{' '}
            <span className='book-pg_navlink'>{book.title}</span> 
          </nav>
          <div className='book-pg_img-wrapper'>
            <img
              src={book.image}
              alt={`${book.title}`}
              className='book-pg_img'
            />
          </div>
          <div className='book-pg_ratings'>
            <Rating value={book.avg_rating||0} precision={0.1} readOnly />
            {`Average Rating: ${book.avg_rating}/5 `}
          </div>
        </section>
        <hr width='100%' color='rgb(3,36,3)'/>
        <section className='book-pg_details-container'>
          <h2 className='book-pg_title'>{book.title}</h2>
          <h3 className='book-pg_author'>{`By: ${book.author} `}</h3>
          <div className='book-pg_details'>
            <p className='book-pg_blurb'>{book.description}</p>
          </div>
          <h4 className='book-pg_price'>{`$${book.price}`}</h4>
          <div className='book-pg_admin-details'>
            {book.stock > 0 ? (
              <button
                className='book-pg_add-btn'
                type='button'
                id='book-pg_add-btn'
                onClick={(e)=> {
                  e.preventDefault();
                  isInCart(book) ? increase(book):addToCart(book);
                  }
                }
              >
                Add to Cart
              </button>
            ):
            <div className='book-pg_none'>
              Item is currently unavailable online. Check back later for updates! 
            </div>
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default BookPage
