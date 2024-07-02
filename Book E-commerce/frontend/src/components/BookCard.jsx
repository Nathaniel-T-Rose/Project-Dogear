import {useState} from 'react'

import { Link } from 'react-router-dom';
import '../styles/card.css';

const BookCard = (props) => {
  const [isFocus,setIsFocus] = useState(false);
  const {content} = props;

  const handleInFocus = () => {
    setIsFocus(true);
  }

  const handleLeaveFocus = () => {
    setIsFocus(false);
  }

  return (
    <div className='card' 
      onMouseEnter={handleInFocus}
      onMouseLeave={handleLeaveFocus} 
    >
      <div className='card_img-wrapper'>
        <img src={content.image} 
          alt={content.title}
          className='card_img'
        />
      </div>
      <div className='card_content'>
        <h4 className='card_title'>{content.title}</h4>
        <h5 className='card_author'>{content.author}</h5>
        <h5 className='card_genres'>{content.genres}</h5>
        <span className='card_blurb'>{content.blurb}</span>
        <div className='card_price'>{content.price}</div>
      </div>
    </div>
  )
}

export default BookCard
