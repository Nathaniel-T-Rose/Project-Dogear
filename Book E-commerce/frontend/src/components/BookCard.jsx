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

  /*TODO: 
  Fix processing script, off by one on string slice
  */
  content.image='https://'+content.image.slice(8)

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
        <span className='card_title'>{content.title}</span>
        <span className='card_author'>{content.author}</span>
      </div>
    </div>
  )
}

export default BookCard
