import React from 'react'
import './Galerija.css'
import galerija_1 from '../../assets/galerija_1.jpg'
import galerija_2 from '../../assets/galerija_2.jpg'
import galerija_3 from '../../assets/galerija_3.jpg'
import galerija_4 from '../../assets/galerija_4.jpg'
import arrow_right from '../../assets/arrow_right.svg'

const Galerija = () => {
  return (
    <div className='galerija'>
      <div className='slike'>
        <img src={galerija_1} alt="" />
        <img src={galerija_2} alt="" />
        <img src={galerija_3} alt="" />
        <img src={galerija_4} alt="" />
      </div>
      <button className='btn dark-btn'>Pogledajte više <img src={arrow_right} alt="" /></button>
    </div>
  )
}

export default Galerija
