import React, { useState } from 'react'
import './signin.scss'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [show,setShow] = useState(false)
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  
  const onShow = () => {
    setShow(!show)
  }

  const handleSubmit = async (e) => {
    try{
        e.preventDefault();
        if(password.length < 7){
            setError(true)
        }else{
            setError(false)
            e.preventDefault()
            const res = await axios.post("/signup",{email,password})
            navigate(`/verifyotp/${res.data._id}`)
        }
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div className='signin'>
        <div className='topbar'>
            <div className='left'>
                Mortal Community
            </div>
            <div className='right'>
                <a>Morals</a>
                <a>Privacy</a>
                <a>Terms & Conditions</a>
            </div>
        </div>
        <div className='formbar'>
            <form className='signinForm'>
                <div className='signinLabel'>
                    <span>Email</span>
                    <input
                    type='email'
                    onChange={(e)=>setEmail(e.target.value)} 
                    required/>
                </div>
                <div className='signinLabel'>
                    <span>Password (7+ characters)</span>
                    <input type={show ? 'text': 'password'} onChange={(e)=>setPassword(e.target.value)} required/>
                    {error ? <label>Password should be atleast 7 characters</label> : ""}
                    <span className='togglebtn' onClick={onShow}>{!show ? <AiFillEye />: <AiFillEyeInvisible />}</span>
                </div>
                
                <button className='btn' onClick={handleSubmit}>
                    Join Mortal
                </button>
            </form>
        </div>
        <div className='footbar'>
            <span className='hl'></span>
            <span>Already memebr on Mortal? <a>Sign in</a></span>
            <span className='para'>By clicking join, you agree to the Mortal <a>User Agreement</a>, <a>Privacy Poilcy </a>& <a>Morals</a></span>
        </div>
    </div>
  )
}

export default Signup
  