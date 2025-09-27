import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Usluge from './components/Usluge/Usluge'
import Naslov from './components/Naslov/Naslov'
import Onama from './components/ONama/Onama'
import Galerija from './components/Galerija/Galerija'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Naslov subTitle='Usluge' title='Što nudimo?'/>
        <Usluge/>

        <Onama/>

        <Naslov subTitle='Pogledajte' title='Galerija'/>
        <Galerija/>      

        <Naslov subTitle='kontakt' title='Kako do nas?'/>
      </div>
      {/* <div className='pozadina'></div>       */}
    </div>
  )
}

export default App
