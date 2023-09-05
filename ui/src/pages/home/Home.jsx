import React from 'react'
import './home.scss'
import Navbar from '../../componenets/navbar/Navbar'
import Mid from '../../componenets/mid/Mid'
import Features from '../../componenets/features/Features'
import Keybox from '../../componenets/keybox/Keybox'
import Postbox from '../../componenets/postbox/Postbox'
import Footer from '../../componenets/footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Mid />
      <Features />
      <Keybox />
      <Postbox />
      <Footer />
    </div>
  )
}

export default Home
