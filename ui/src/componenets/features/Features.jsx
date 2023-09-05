import React from 'react'
import './features.scss'
import {FaPeoplePulling,FaPeopleCarryBox} from 'react-icons/fa6'
import {SiLevelsdotfyi} from 'react-icons/si'
import {BsSendPlusFill} from 'react-icons/bs'

function Features() {
  return (
    <div className='features'>
        <div className="container">
            <div className="box1">
               <h5>Never can work alone</h5>
               <h2>Key Features</h2>
               <h4>We are all about our Clients & Colleague comfort and safety</h4>
               <h4>we provide the best platform for both</h4>
            </div>
          <div className="box2">
            <div className="desc">
              <div className="icons">
                <FaPeoplePulling />
              </div>
              <h3> Need Colleague ? </h3>
              <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="desc">
              <div className="icons">
                 <BsSendPlusFill />
              </div>
               <h3> Post Work </h3>
               <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="desc">
                <div className="icons">
                 <FaPeopleCarryBox />
                </div>
               <h3> Join Work </h3>
               <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="desc">
                <div className="icons">
                <SiLevelsdotfyi />
                </div>
               <h3> Level UP </h3>
               <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>              
           </div>
        </div>
    </div>
  )
}

export default Features
