import { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import BookCard from '../components/BookCard';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Select from 'react-select';

import '../styles/titles.css'

const Books = ({title,author,genres,setGenres}) => {
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
      const response = await axios.post('http://localhost:8000/bookcommerce/books',data);
      setBooks(response.data.data);
      setPageRange(response.data.page.pageMax);
    }
    fetchBooks();
  },[books,title,author,genres,page,order])

  const handleGenres = (values) => {
    let vals=[];
    console.log(values);
    for(var idx in values) {
      vals.push(values[idx].value);
    };
    setGenres(vals);
  }
   
  const genre_vals=[
    {value: "'Fiction'", label: 'Fiction'},
    {value: "'Nonfiction'", label: 'Nonfiction'},
    {value: "'Young Adult'", label: 'Young Adult'},
    {value: "'Romance'", label: 'Romance'},
    {value: "'Historical'", label: 'Historical'},
    {value: "'Classics'", label: 'Classics'},
    {value: "'Drama'", label: 'Drama'},
    {value: "'Science Fiction'", label: 'Science Fiction'},
    {value: "'Fantasy'", label: 'Fantasy'},
    {value: "'Horror'", label: 'Horror'},
    {value: "'Dystopia'", label: 'Dystopia'},
    {value: "'Historical'", label: 'Historical'},
    {value: "'Biography'", label: 'Biography'},
    {value: "'Plays'", label: 'Plays'}
  ];

  const filter_vals=[
    {value:'id', label: 'None'},
    {value:'author', label: 'Author (A-Z)'},
    {value:'-author', label: 'Author (Z-A)'},
    {value:'title', label: 'Title (A-Z)'},
    {value:'-title', label: 'Title (Z-A)'}
  ]

  return (
    <div className='titles'>
      <div className='titles-filter-container'>
        <div className='titles-filter'>
            <Select 
            options={filter_vals}
            label={'Filter by'}
            onChange={(e)=>{setOrder(e.value)}}
            placeholder='Order By'
            />
        </div>
        <div className='titles-genres-filter'>
          <Select 
            isMulti
            options={genre_vals}
            onChange={handleGenres}
            placeholder='Select Genres'
            />
        </div>
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
