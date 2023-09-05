import React from 'react'
import './mid.scss'
import Subnav from '../navbar/subnav/Subnav'

function Mid() {
  return (
    <div className='mid'>
      <Subnav />
      <div className="midContainer">
        <div className="left">
          <div className="quote">
            <h1 className='one'>End up the boring pattern</h1>
            <h1 className='two'>Start to build</h1>
            <h1 className='two'>Your own community</h1>
          </div>
          <button className='btn'>Join Mortal</button>
          </div>
        <div className="right">

      </div>
      </div>
    </div>
  )
}

export default Mid
