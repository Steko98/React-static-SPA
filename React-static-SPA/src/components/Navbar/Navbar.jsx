import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';

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
        <Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className='logo'/></Link>
        <div className='nav-naslov'>
          <Link to="hero" smooth={true} offset={0} duration={500}><h1>Marek</h1></Link>
          <Link to="hero" smooth={true} offset={0} duration={500}><p>Obrt za hortikulturu</p></Link>     
        </div>  
      </div>
      <ul>
        <li><Link to="about" smooth={true} offset={-160} duration={500}>O Nama</Link></li>        
        <li><Link to="usluge" smooth={true} offset={-250} duration={500}>Usluge</Link></li>
        <li><Link to="galerija" smooth={true} offset={-205} duration={500}>Galerija</Link></li>
        <li><Link className='btn' to="kontakt" smooth={true} offset={-200} duration={500}>Kontakt</Link></li>

        <a className='social' href="https://www.facebook.com/people/Marek-Hortikultura/61574599284137/#" target="_blank"><FaFacebook /></a>
        <a className='social' href='https://www.instagram.com/marek_hortikultura/' target="_blank"><FaInstagram /></a>
      </ul>
    </nav>
  )
}

export default Navbar
