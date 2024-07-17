import {useState,useContext} from 'react'

import { useParams,Link } from 'react-router-dom';


import '../styles/card.css';

const BookCard = ({content}) => {
  const book = content;
  return (
    <Link className='card' 
      to={(book.id!==undefined ? `/bookpage/${book.id}`:'')}
    >
      <div className='card_img-wrapper'>
        <img 
          className='card_img' 
          src={book.image} 
          alt={book.title}
        />
      </div>
      <div className='details-wrapper'>
        <div className='card_book_details'>
          <span className='card_title'>{book.title}</span>
          <span className='card_author'>{book.author}</span>
        </div>
      </div>
    </Link>
  )
}

export default BookCard
