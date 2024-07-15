import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/featuredauthors.css'

const FeaturedAuthors = ({setAuthor}) => {
  
  const author={
    name:'Neil Gaiman',
    blurb:`Neil Gaiman is credited with being one of the creators of modern comics, as well as an author whose work crosses genres and reaches audiences of all ages. He is listed in the Dictionary of Literary Biography as one of the top ten living post-modern writers and is a prolific creator of works of prose, poetry, film, journalism, comics, song lyrics, and drama. Gaiman has achieved cult status and attracted increased media attention, with recent profiles in The New Yorker magazine and by CBS News Sunday Morning.
    A self-described "feral child who was raised in libraries," Gaiman credits librarians with fostering a life-long love of reading: "I wouldn't be who I am without libraries. I was the sort of kid who devoured books, and my happiest times as a boy were when I persuaded my parents to drop me off in the local library on their way to work, and I spent the day there. I discovered that librarians actually want to help you: they taught me about interlibrary loans."`
    ,img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitNHkp-FVc4hbpsuYbqLDsDYCUlAp6sLlFAD4GUqHe6uaJVGxfuizcqNgk5xYCsxknyE_pO7vifDUFJ0Kd6COx77G0zK92tsBCRY-bO7vZHXJpVKSHOhYTSZ1ITCIZgD9BDvs8-u1EgeB0ZBJPfi4acuaIUn0z1TrLqkQgbBD6K0zud0K0Yj8/s4320/TourPhoto2022SMALL.jpg'
  }


  return (
    <section className="fa">
      <div className='fa_col-1'>
        <h3 className='fa-author_name'>{`Featured Author: ${author.name}`}</h3>
        <p className='fa-author_blurb'>{author.blurb}</p>
      </div>
      <div className='fa_col-2'>
        <div className='fa_img-wrapper'>
          <img 
            src={author.img}
            alt={`Image of ${author.name}`}
            className={`fa_col-img`}
            loading='lazy'
            />
        </div>
        <Link to='/titles' className='fa_link' onClick={() => {setAuthor(author.name)}}>
          Browse Author's Works
          </Link>
      </div>
    </section>
  )
}

export default FeaturedAuthors
