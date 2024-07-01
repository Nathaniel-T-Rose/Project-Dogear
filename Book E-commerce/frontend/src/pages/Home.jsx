import React from 'react'
import Hero from '../components/Hero'
import FeaturedTitles from '../components/FeaturedTitles'
import FeaturedAuthors from '../components/FeaturedAuthors'

const Home = () => {
  return (
    <div className='homescreen'>
        <Hero />
        <FeaturedTitles />
        <FeaturedAuthors />  
    </div>
  )
}

export default Home
