import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import axios from './axios'
import BookCard from '../components/BookCard';


const Books = (title,genre,setGenre,author,...props) => {
  const [books,setBooks]=useState([]);
  
  useEffect(() => {
    async function fetchBooks() {
      const request = await axios.get(option);
      setBooks = request.data.results;
    }
  },[genre])
  
  return (
    <div>
      <FlipMove>
        {books.map((book) => {
          <BookCard key={book.id} content={book}/>
        })}
      </FlipMove>
    </div>
  )
}

export default Books
