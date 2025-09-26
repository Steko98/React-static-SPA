import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="business logo" className='logo'/>
      <ul>
        <li>Usluge</li>
        <li>Galerija</li>
        <li>O Nama</li>
        <li><button className='btn'>Kontakt</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
