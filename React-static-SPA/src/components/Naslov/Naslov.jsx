import React from 'react'
import './Naslov.css'

const Naslov = ({subTitle, title}) => {
  return (
    <div className='naslov'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
import './Naslov.css'

export default Naslov
