import {React,useState,useMemo,useEffect} from 'react'
import './userprofile.scss'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'


function UserProfile() {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const gen = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" }
  ];
  const [name,setName] = useState("")
  const [dateOfBirth,setDateOfBirth] = useState("")
  const [genders,setGender] = useState("")
  
  const changeHandler = value => {  
    setValue(value)
  }
  const changeGender = genders => {  
    setGender(genders)
  }


  const handleSubmit = async(e) => {
      const country = value.label
      const gender = genders.label
      const upobj = {name : name,  gender : gender.toString(), dateOfBirth : dateOfBirth.toString(), country : country.toString()}
    try{
      e.preventDefault()
      console.log(location.pathname.split("/")[2])
      await axios({
	     method: "put",
       headers: {
          token : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWUyNDY4YjNmNTMwMjNmZDdmMWJhOCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2OTM4NDgzMzYsImV4cCI6MTY5NDI4MDMzNn0.VhBRxh_FCix7b9yS8JIYy8WmUWTkdZ-SvqO0um0oNQk'
       },
	     url: `/user/update/${location.pathname.split("/")[2]}`,
	     data: upobj
      }).then((res) => navigate('/')).catch((err) => console.log(err))

    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='userprofile'>
       <form className='formuser'>
       <h1>Welcome to Mortel Commune</h1>
        <div className="userInput">
          <span>Name </span>
          <input type='text' onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="userInput">
          <span>Birthday </span>
          <input type='date' onChange={(e)=>setDateOfBirth(e.target.value)}required/>
        </div>
        <div className="userInput">
          <span>Gender </span>
            <div className="w-350">
             <Select options={gen}  value={genders} onChange={changeGender}/>
            </div>
        </div>
        <div className="userInput">
          <span>Country </span>
           <div className="w-350">
          <Select options={options} value={value} onChange={changeHandler} />
        </div>
        </div>
        <button className='btn' onClick={handleSubmit}>Continue</button>
       </form>
    </div>
  )
}

export default UserProfile
