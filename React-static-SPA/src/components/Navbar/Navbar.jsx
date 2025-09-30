import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';
import { RiMenu5Line } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <div>
        {/* <Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className='logo'/></Link> */}
        <Link to="hero" smooth={true} offset={0} duration={500}><TbPlant2 className='logo' size={40}/></Link>
        <div className='nav-naslov'>
          <Link to="hero" smooth={true} offset={0} duration={500}><h1>Marek</h1></Link>
          <Link to="hero" smooth={true} offset={0} duration={500}><p>obrt za hortikulturu</p></Link>     
        </div>  
      </div>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link className='nav-link' to="about" smooth={true} offset={-160} duration={500}>O Nama</Link></li>        
        <li><Link className='nav-link' to="usluge" smooth={true} offset={-250} duration={500}>Usluge</Link></li>
        <li><Link className='nav-link' to="galerija" smooth={true} offset={-205} duration={500}>Galerija</Link></li>
        <li><Link className='nav-link btn' to="kontakt" smooth={true} offset={-200} duration={500}>Kontakt</Link></li>
        <li><a href="https://www.facebook.com/people/Marek-Hortikultura/61574599284137/#" target="_blank" rel="noopener noreferrer"><FaFacebook className='social pulse-icon' size={24}/></a></li>
        <li><a href='https://www.instagram.com/marek_hortikultura/' target="_blank" rel="noopener noreferrer"><FaInstagram className='social pulse-icon' size={24}/></a></li>
      </ul>
      <RiMenu5Line size={32} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
