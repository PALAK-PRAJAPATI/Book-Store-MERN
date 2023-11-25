import React, { useState } from 'react'
import Navigation from './Navigation.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/login",{email,password})
    .then((result)=>{
      console.log(result);
      if(result.data==="Success"){ //if result is there
        Navigate('/admin');
        toast.success(<b>Login Successful</b>)
    }
    else if(result.data==="Invalid credentials"){
        toast.error(<b>Invalid email or password</b>)
    }
    else{
        toast.error(<b>User does not exist</b>)
    }
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <Navigation />
    <h4 className='text-center mt-4'>Admin Login</h4>
      <div className='d-flex justify-content-center align-items-center  '>
        <div className='bg-white p-5 m-3 rounded w-50  ' style={{border:"1px solid grey"}}> 
        <h2>Sign-in</h2>

        <form onSubmit={handleSubmit}>

          <div className='mb-4'>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" placeholder='Enter Your Email' autoComplete='off' onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control rounded-0'/>
          </div>

          <div className='mb-4'>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" placeholder='Enter Your Password' autoComplete='off' onChange={(e)=>setPassword(e.target.value)} name='password' className='form-control rounded-0'/>
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
        </form>

        </div>

      </div>
    </>
  )
}

export default Login
