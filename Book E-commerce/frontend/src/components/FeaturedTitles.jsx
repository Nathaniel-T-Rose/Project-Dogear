import React, { useEffect, useState } from 'react'
import banner from '/src/assets/images/staff-picks.png'

import '../styles/featuredtitles.css'
import staff_picks from '../assets/staff_picks';
import BookCard from './BookCard';
import axios from 'axios';

const FeaturedTitles = () => {
  const [titles,setTitles] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const data={
        'titles':staff_picks
      }
      const response = await axios.post('http://localhost:8000/bookcommerce/featuredTitles',data);
      setTitles(response.data.data);
    }
    fetchBooks();
  },[])
  return (
    <section className='staff-picks'>
      <div className='sp-banner-wrapper'>
      </div>
      <div className='staff-picks-cards'>
      {titles.map((book) => (
          <BookCard key={book.id} content={book} />
        ))}
      </div>
    </section>
  )
};

export default FeaturedTitles
