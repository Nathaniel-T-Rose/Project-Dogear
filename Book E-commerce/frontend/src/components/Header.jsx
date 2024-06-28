import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


import NavBar from './NavBar';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../assets/images/logo.png';

import '../styles/header.css';

const Header = () => {
  
  
  return (
    <header className='header'>
      <div className="header_wrapper">
        <Link to="/" className="header_logo">
            <img src={logo} alt="Dog Ear Logo" className="header_logo-img" />
        </Link>
        <div className="header_icons-wrapper">
          <Link
            to="/checkout"
            className="header_btn-icon"
          >
            <ShoppingCartOutlinedIcon />
          </Link>
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
