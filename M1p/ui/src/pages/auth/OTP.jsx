import React, { useState } from 'react'
import './otp.scss'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'

function OTP() {
  const [otp,setOtp] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleSubmit = async(e) => {
    try{
       e.preventDefault()
       await axios.post(`/verifyotp/${location.pathname.split("/")[2]}`,{otp})
       navigate('/')
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div className='otp'>
       <div className='container'>
         <h2>otp has been sent to your registered email-id</h2>
          <form className='form'>
            <input type='text' maxlength="6" required onChange={(e) => setOtp(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
          </form>
       </div>
    </div>
  )
}

export default OTP
