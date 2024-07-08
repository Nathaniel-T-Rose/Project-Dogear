import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import BookCard from '../components/BookCard';
import axios from 'axios';
import '../styles/titles.css'

const Books = ({title,author,genres}) => {
  const [books,setBooks]=useState([]);

  useEffect(() => {
    async function fetchBooks() {
      console.log('fetching books');
      console.log(title);
      console.log()
      const data={
        'author':author,
        'title':title,
        'genres':genres
      }
      console.log(data);
      /*["'Horror'"]*/
      const response = await axios.post('http://localhost:8000/bookcommerce/books',data);
      console.log(response)
      setBooks(response.data);
    }
    fetchBooks();
  },[title,author,genres])

  return (
    <div className='titles'>
      <section className='titles-display'>
        {books.map((book) => (
          <BookCard key={book.id} content={book} />
        ))}
      </section>
    </div>
  )
}

export default Books
