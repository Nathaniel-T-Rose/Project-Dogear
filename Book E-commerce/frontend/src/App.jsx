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
import { useNavigate} from 'react-router-dom';
import BookPage from './pages/BookPage'
import Cart from './pages/Cart/Cart'

function App() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [genres,setGenres] = useState([]);
  const [book,setBook]=useState({});
  const navigator = useNavigate();

  return (
    <div className='app'>
        <Header />
        <SearchBar setTitle={setTitle} setAuthor={setAuthor} nav={navigator} />
        <hr width='90%' color='rgb(3,36,3)'/>
        <Routes>
          <Route path='/' element={<Home setAuthor={setAuthor} setGenres={setGenres}/>} />
          <Route path='/titles' element={<Books title={title} author={author} genres={genres} setGenres={setGenres}/>} />
          <Route path='/bookpage/:id' element={<BookPage />} />
          <Route path='/about' element={<About nav={navigator} />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/checkout' element={<Cart/> } />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
