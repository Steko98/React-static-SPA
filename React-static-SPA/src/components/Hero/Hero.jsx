import React from 'react'
import './Hero.css'
import arrow_right from '../../assets/arrow_right.svg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Uređenje okućnice</h1>
        <p>Pretvorite svoje dvorište u pravu zelenu oazu! Opustite se i uživajte, a brigu prepustite nama</p>
        
        <Link className='btn' to="about" smooth={true} offset={-160} duration={500}>Saznaj više <img src={arrow_right} alt="arrow icon" /></Link>
      </div>
    </div>
  )
}

export default Hero
