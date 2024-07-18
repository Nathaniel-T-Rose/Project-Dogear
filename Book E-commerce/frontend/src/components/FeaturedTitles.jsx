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
      console.log('domain:',import.meta.env.VITE_DOMAIN+'/bookcommerce/books')
      const response = await axios.post(import.meta.env.VITE_DOMAIN+'/bookcommerce/featuredTitles',data);
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
