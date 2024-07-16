import {useState,useContext} from 'react'

import { useParams,Link } from 'react-router-dom';


import '../styles/card.css';

const BookCard = (bookContent) => {
  const [isFocus,setIsFocus] = useState(false);
  const {content} = bookContent;

  /*TODO: 
  Fix processing script, off by one on string slice
  */
  /*content.image='https://'+content.image.slice(8)
*/
  return (
    <Link className='card' 
      to={(content.id ? `/bookpage/${content.id}`:'')}
    >
      <div className='card_img-wrapper'>
        <img 
          className='card_img' 
          src={content.image} 
          alt={content.title}
        />
      </div>
      <div className='card_content'>
        <span className='card_title'>{content.title}</span>
        <span className='card_author'>{content.author}</span>
      </div>
    </Link>
  )
}

export default BookCard
