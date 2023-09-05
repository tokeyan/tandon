import React from 'react'
import './postbox.scss'

function Postbox() {
  return (
    <div className='postbox'>
       <div className="container">
          <div className="left">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzXXinNeeKOVYlXumPJDb5ZBXY7zyri9uT9Bx0HpLrhDW1ns_DZToQ_repNY8rHDOP1Y&usqp=CAU' alt='' />
          </div>
          <div className="right">
             <div className="desc">
                <h2>Post a Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum quod exercitationem doloribus architecto? Quasi repellat</p>
             </div>
             <div className="desc">
                <h2>Choose Your People</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum quod exercitationem doloribus architecto? Quasi repellat</p>
             </div>
             <div className="desc">
                <h2>Real Time Monitor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum quod exercitationem doloribus architecto? Quasi repellat</p>
             </div>
             <button>
                Post Work
             </button>
          </div>
       </div>
    </div>
  )
}

export default Postbox
