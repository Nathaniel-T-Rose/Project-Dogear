import React, { useState } from 'react'
import axios from 'axios'

const Recommendations = () => {

  const [data, setData] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] =useState('');

  function handleTitleChange(e){
    setTitleInput(e.target.value)
  }

  function handleAuthorChange(e){
    setAuthorInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setData([...data, {'title':titleInput,'author':authorInput}])
    setTitleInput('');
    setAuthorInput('');
  }

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <main className='recommendations' >
      <h2>Welcome to our automated recommendation system!</h2>
      <p>
        Enter the title and author of some of your favorite books, and we'll generate 
        recommendations for you based on them! 
      </p>
      <hr width='90%' color='rgb(3,36,3)'/>
      <section className='recommendations-entry'>
          <div>
          <span>Book Entry</span>
          <form>
            <input type='text' placeholder='Title' value={titleInput} onChange={handleTitleChange}/>
            <input type='text' placeholder='Author' value={authorInput} onChange={handleAuthorChange} />
            <button onClick={handleSubmit}>Add</button>
          </form>
          <ul>
            {data.map((pair,index) => (
              <li key={index}>{pair.title}, {pair.author}
              <button onClick={(index)=>handleDelete(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button>Get Recommendations</button>
        </div>
      </section>
      <section className='recommendations-results'>
      <hr width='90%' color='rgb(3,36,3)'/>
      <p>
        Still can't find what you're looking for?
        Drop by our location and talk to one of our sales associates for personally curated recommendations.
      </p>
      </section>
    </main>
  )
}

export default Recommendations
