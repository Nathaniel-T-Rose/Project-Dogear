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
function App() {

  const [filter,setFilter]=useState('genre')

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/titles' element={<Books filter={filter} />} />
          <Route path='/about' element={<About />} />
          <Route path='/recommendations' element={<Recommendations />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
