import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Titles from './pages/Titles'
import Genres from './pages/Genres'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/titles' element={<Titles />} />
          <Route path='/about' element={<About />} />
          <Route path='/genres' element={<Genres />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
