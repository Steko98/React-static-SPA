import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Usluge from './components/Usluge/Usluge'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Usluge/>
      </div>
    </div>
  )
}

export default App
