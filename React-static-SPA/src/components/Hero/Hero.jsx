import React from 'react'
import './Hero.css'
import arrow_right from '../../assets/arrow_right.svg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We happy?</h1>
        <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        <button className='btn'>Saznaj više <img src={arrow_right} alt="arrow icon" /></button>
      </div>
    </div>
  )
}

export default Hero
