import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Titles from './pages/Titles'
import Recommendations from './pages/Recommendations'
import Footer from './components/Footer'
import Books from './pages/Books'
import SearchBar from './components/SearchBar'
function App() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [genres,setGenres] = useState(["'Horror'","'Young Adult'"]);
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <SearchBar setTitle={setTitle} setAuthor={setAuthor} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/titles' element={<Books title={title} author={author} genres={genres} />} />
          <Route path='/about' element={<About />} />
          <Route path='/recommendations' element={<Recommendations />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
