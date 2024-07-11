import React from 'react'
import Hero from '../components/Hero'
import FeaturedTitles from '../components/FeaturedTitles'
import FeaturedAuthors from '../components/FeaturedAuthors'
import Genres from '../components/Genres'

const Home = ({setGenres}) => {
  return (
    <div className='homescreen'>
        <Hero />
        <Genres setGenres={setGenres}/>
        <hr width='90%' color='rgb(3,36,3)'/>
        <FeaturedTitles />
        <FeaturedAuthors />  
    </div>
  )
}

export default Home
