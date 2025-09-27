import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div>
        <img src={logo} alt="logo" className='logo'/>
        <div className='nav-naslov'>
          <h1>Marek</h1>
          <p>Obrt za hortikulturu</p>          
        </div>  
      </div>
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
