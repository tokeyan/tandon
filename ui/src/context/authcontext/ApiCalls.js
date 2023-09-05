import axios from 'axios'
import {loginStart,loginSuccess,loginFail} from './AuthAction'

export const login = async(user,dispatch) => {
    dispatch(loginStart())
    try{
    const res = await axios.post("/signin",user)
    dispatch(loginSuccess(res.data))
    }
    catch(err){
    dispatch(loginFail())
    }
}