import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import BookCard from '../components/BookCard';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

import '../styles/titles.css'

const Books = ({title,author,genres}) => {
  const [books,setBooks]=useState([]);
  const [pageRange,setPageRange]=useState(1);
  const [page,setPage]=useState(1);
  const [order,setOrder]=useState('id');

  useEffect(() => {
    async function fetchBooks() {
      const data={
        'order':order,
        'page':page,
        'author':author,
        'title':title,
        'genres':genres
      }
      /*["'Horror'"]*/
      const response = await axios.post('http://localhost:8000/bookcommerce/books',data);
      setBooks(response.data.data);
      setPageRange(response.data.page.pageMax);
    }
    fetchBooks();
  },[title,author,genres,page,order])

  return (
    <div className='titles'>
      <div className='titles-filter'>
        <label>
          {'Filter:  '} 
          <select value={order} onChange={(e)=>{setOrder(e.target.value);}}>
            <option value='author'>Author (A-Z)</option>
            <option value='-author'>Author (Z-A)</option>
            <option value='title'>Title (A-Z)</option>
            <option value='-title'>Title (Z-A)</option>
          </select>
        </label>
      </div>
      <div className='titles-container'>
      <section className='titles-display'>
        {books.map((book) => (
          <BookCard key={book.id} content={book} />
        ))}
      </section>
      {(books.length === 0 && 
        <section className='titles-none'>
          We couldn't find what you're looking for in our online collection. Stop by our location and one of our associates will help you further!
        </section>

      )}
      </div>
      <div className='titles-paginator'>
        {(books.length>0 &&
        <Pagination count={pageRange} page={page} onChange={(e,value) => setPage(value)} />
        )}
      </div>
    </div>
  )
}

export default Books
