import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase'
import a from '../Assets/a.png'
 const Login = () => {


 
 const auth = getAuth(app) ;
const navigate = useNavigate();
const signup = ()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    axios.post('https://snaptrackr-55953-default-rtdb.firebaseio.com/signup.json',data)


    navigate('/')
    // ...
  })
  .catch((error) => {
    console.log(error)
    alert(error)
  });
}
  
  const[data,setData]=useState(
    {
      username:'',
      email:'',
      password:''
      

    }
  )
  const {username,email,password}=data;
    
 const changeHandler = e=>{
  setData({ ...data,[e.target.name]:e.target.value})
 }

 const submitme=e=>{
 e.preventDefault();
  
  console.log(data)
  
 }


  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-3 px-5'>
        <div className='none'><img classname='h-5 w-8 ml-5' src={a} alt="hi"/></div>
        {/* <div className=' hidden sm:grid'><img className='scale-75' alt="h" src={img4}/></div> */}
        <div  className=''>
          <div className='grid grid-cols-1 bg-white  mt-11 '>
         


 

  
    <div>
    <div class="max-w-sm  overflow-hidden shadow-xl stroke-black rounded-lg ml-11 sm:ml-0 mb-11">
    <div class="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal ">
      <center>
      <h1 className='text-[#1a1c31c6] font-bold  mt-11 text-center text-2xl '>We are glad you're here!</h1> 
        <h1 className='text-[#feb351] font-bold text-2xl mt-6'>Sign Up</h1> 
        <form onSubmit={submitme} autoComplete='off'>
         <div> <h3  className='text-[#0b0b11] font-bold text-md text-left mt-5 ml-11 pl-7 '>Username</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2' type="text" name='username' placeholder='    Enter name' value={username} onChange={changeHandler} required/><br></br>
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2 ml-11 pl-7'>Email</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="text" name='email'placeholder='    Enter email'value={email} onChange={changeHandler}  required/><br></br>
        
        <div> <h3  className='text-[#0a0a0f] font-bold text-md text-left mt-2  ml-11 pl-7 '>Password</h3></div>
        <input className='border-2 border-gray-300 h-10 w-60 rounded-lg mt-2'  type="password" name='password'placeholder='    Enter password'value={password} onChange={changeHandler} required/><br></br>
<br></br>
        
        
        <button   onClick={signup} className=' font-extrabold text-white bg-[#feb351] px-4 py-2 rounded-lg mb-2'>Sign Up</button>
        <h1 className='text-sm px-8 mb-3 font-semibold'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h1>

        <h1 className='mb-7 text-blue-600 font-semibold'><Link to='/user'>Already have an Account?</Link></h1>

        </form>
      </center>
      </div>
      </div>
    </div>
  



</div>
        </div>
      </div>
    </div>
  )
}

export default Login






