import React from 'react';
import {NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/navbar.css'

const NavBar = () => {
  return (
    <motion.nav
        className='navbar'
        initial = {{ y: -10 }}
        animate = {{ y:0 }}
        transition = {{ type: 'tween'}}
    >
        <ul className='navbar_links'>
            <NavLink
                to='/titles'
                className='navbar_link'
            > 
            Browse Titles 
            </NavLink>
            <NavLink
                to='/recommendations'
                className='navbar_link'
            >
            Need a recommendation?
            </NavLink>
            <NavLink
                to='/about'
                className='navbar_link'
            >
            About Us
            </NavLink>
        </ul>
    </motion.nav>
  )
}

export default NavBar
