import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import BookCard from '../components/BookCard';
import axios from 'axios';
import '../styles/titles.css'

const Books = (filter) => {
  const [books,setBooks]=useState([]);

  useEffect(() => {
    async function fetchBooks() {
      console.log('fetching books');
      const data={
        'author':'Anne Rice',
        'title':'',
        'genres':[]
        /*"'Horror'"*/
      }
      const response = await axios.post('http://localhost:8000/bookcommerce/books',data);
      console.log(response)
      setBooks(response.data);
    }
    fetchBooks();
  },[filter])

  return (
    <div className='titles'>
      <section className='titles-display'>
        {books.map((book) => (
          <BookCard content={book}/>
        ))}
      </section>
    </div>
  )
}

export default Books
