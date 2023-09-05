import React, { useState } from 'react'
import './navbar.scss'
import Useragree from './userAgreement/Useragree'

function Navbar() {
  const [show,setShow] = useState(false)
  const [isScrolled,setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <>
     <div className='navbar'>
        <div className={isScrolled ? "container scrolled" : "container"}>
           <div className='left'>
             <div className="logo">
                 logo
             </div>
             <a>How Works?</a>
             <a>Rise Request</a>
             <a>T Board</a>
             <a onMouseEnter={() => setShow(true)} onClick={() => setShow(false)}>User Agreement</a>    
        </div>
        <div className='right'>
            <a>Join Mortal</a>
        </div>
        </div>
    </div>
    <div className='useragree' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {show && <Useragree />}
    </div>
    </>
  )
}

export default Navbar
