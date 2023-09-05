import React, { useContext, useState } from 'react'
import './signin.scss'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {login} from '../../context/authcontext/ApiCalls'
import { AuthContext } from '../../context/authcontext/AuthContext'
 
function Signin() {
  const [show,setShow] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {isFetching,dispatch} = useContext(AuthContext)
  
  const onShow = () => {
    setShow(!show)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({email,password},dispatch)
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
                    <span className='togglebtn' onClick={onShow}>{!show ? <AiFillEye />: <AiFillEyeInvisible />}</span>
                </div>
                <button className='btn' onClick={handleSubmit} disabled={isFetching}>
                    Continue
                </button>
            </form>
        </div>
        <div className='footbar'>
            <span className='hl'></span>
            <span>New to Mortal? <a>Sign up</a></span>
        </div>
    </div>
  )
}

export default Signin
  