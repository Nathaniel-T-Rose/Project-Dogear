import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/featuredauthors.css'

const FeaturedAuthors = () => {
  const author={
    name:'Neil Gaiman',
    blurb:`A self-described "feral child who was raised in libraries," Gaiman credits librarians with fostering a life-long love of reading: "I wouldn't be who I am without libraries. I was the sort of kid who devoured books, and my happiest times as a boy were when I persuaded my parents to drop me off in the local library on their way to work, and I spent the day there. I discovered that librarians actually want to help you: they taught me about interlibrary loans."`
    ,img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitNHkp-FVc4hbpsuYbqLDsDYCUlAp6sLlFAD4GUqHe6uaJVGxfuizcqNgk5xYCsxknyE_pO7vifDUFJ0Kd6COx77G0zK92tsBCRY-bO7vZHXJpVKSHOhYTSZ1ITCIZgD9BDvs8-u1EgeB0ZBJPfi4acuaIUn0z1TrLqkQgbBD6K0zud0K0Yj8/s4320/TourPhoto2022SMALL.jpg'
  }
  return (
    <section className="fa">
      <div className='fa_col-1'>
        <h3>Featured Author</h3>
        <h4 className='fa-author_name'>{author.name}</h4>
        <p className='fa-author_blurb'>{author.blurb}</p>
        <Link to='/titles' clasName='fa-link'>Browse Author's Works</Link>
      </div>
      <div className='fa_img-wrapper'>
        <img 
          src={author.img}
          alt={`Image of ${author.name}`}
          className={`fa_col-img`}
          loading='lazy'
          />
      </div>
    </section>
  )
}

export default FeaturedAuthors
