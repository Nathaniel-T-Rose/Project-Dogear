import React from 'react'
import { Link } from 'react-router-dom'
import genre_icons from './../assets/genre_icons';

import '../styles/genreicons.css'

const Genres = ({setGenres}) => {
  return (
    <section className='genres'>
        <div className='genre-icons-wrapper'>
            <div className='genre-icons'>
                <div className='genre-icons-group'>
                    {Object.keys(genre_icons).map((key) => { 
                        return(
                        <Link to='/titles' className='genre-icon' onClick={()=>{
                            setGenres([`'${key}'`]);}}>
                            <img className='icon-img' src={genre_icons[key]}></img>
                            <div className='icon-label'>{key}</div>
                        </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Genres
