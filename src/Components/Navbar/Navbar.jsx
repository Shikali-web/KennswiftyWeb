import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>Our Team</li>
        <li>Our Culture</li>
        <li>Sustainability</li>
        <li>Media</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
