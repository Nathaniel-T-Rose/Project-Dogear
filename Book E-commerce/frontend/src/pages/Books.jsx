import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import BookCard from '../components/BookCard';
import '../styles/titles.css'

const Books = (props) => {
  
  const testBook={
    id:1,
    title:'Test Title',
    author:'John Doe',
    genre:'Fiction',
    blurb:'This is the blurb for this book',
    price:'$13.29',
    img:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg'
  };

  const books=[testBook,testBook,testBook,testBook];
  console.log(books)
 {/* useEffect(() => {
    async function fetchBooks() {
      const request = await axios.get(option);
      setBooks = request.data.results;
    }
  },[option])
  */}
  
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
