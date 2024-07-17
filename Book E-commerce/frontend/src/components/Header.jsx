import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


import NavBar from './NavBar';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../assets/images/logo.png';

import '../styles/header.css';
import cartContext from '../pages/Cart/CartContext.jsx';

const Header = () => {
  
  const { itemCount } = useContext(cartContext);
  
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
            {itemCount > 0 && (
            <div className='header_btn-icon cart-num-items'>
              {itemCount}
            </div>
            )}
            <ShoppingCartOutlinedIcon fontSize='large'/>
          </Link>
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
