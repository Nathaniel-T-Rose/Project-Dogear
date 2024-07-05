import {useState} from 'react'

import { Link } from 'react-router-dom';
import '../styles/card.css';

const BookCard = (props) => {
  const [isFocus,setIsFocus] = useState(false);
  const {content} = props;
  console.log('content:',content);

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
        <img src={content.img} 
          alt={content.title}
          className='card_img'
        />
      </div>
      <div className='card_content'>
        <h4 className='card_title'>{content.title}</h4>
        <h5 className='card_author'>{content.author}</h5>
        <div className='card_price'>{content.price}</div>
      </div>
    </div>
  )
}

export default BookCard
