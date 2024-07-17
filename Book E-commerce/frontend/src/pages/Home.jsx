import React from 'react'
import FeaturedTitles from '../components/FeaturedTitles'
import FeaturedAuthors from '../components/FeaturedAuthors'
import Genres from '../components/Genres'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = ({setGenres,setAuthor}) => {
  return (
    <div className='homescreen'>
        <Genres setGenres={setGenres}/>
        <hr width='90%' color='rgb(3,36,3)'/>
        <FeaturedAuthors setAuthor={setAuthor}/>  
        <hr width='90%' color='rgb(3,36,3)'/>
        <FeaturedTitles />
        <hr width='90%' color='rgb(3,36,3)'/>
        <section className='home-description'>
          <h2>
            <Link className='home-link' to='/about'>Get to Know Dog Ear Books</Link>
          </h2>
          <h3>Buy Books Online or Come Visit Us in Person!</h3>
          <p> No matter what you’re a fan of, from Thrillers to Biographies, Sci-Fi, Mystery, YA, Fantasy, and more, Dog Ear has the perfect book for you. 
            Shop from our collection of bestsellers, time-honored classics, or get personalized recommendations to find your next great read!
          </p>
        </section>
    </div>
  )
}

export default Home
