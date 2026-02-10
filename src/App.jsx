import React, { useState } from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL
  const[isLoginView, setIsLoginView] = useState(true);
  const[togglePassword, setTogglePassword] = useState('password');

  function switchView(){
    setIsLoginView(isLoginView === true ? false : true);
  }

  function togglePwd(){
    setTogglePassword(togglePassword === 'password' ? 'text' : 'password');
  }
  return (
    <div className='app'>
      {
        isLoginView===true &&
        <div className='login-container'>
          <h2>sign in with email</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'mail.jpg'} alt=""/>
            <input type='email' placeholder='Enter your email'/>
          </div>
          <div className='input-group'>
             <img className='left-icon' src={IMGURL + 'lock.jpg'} alt=""/>
            <input type={togglePassword} placeholder='Enter your password'/>
            <img className='right-icon' src={IMGURL + 'eye icon.jpg'} alt="" onClick={()=>togglePwd()}/>
          </div>
          <p>Don't have an account?<label onClick={()=>switchView()}>Sign up</label></p>
          <button>Sign in</button>
        </div>
      }
     {
        isLoginView===false &&
        <div className='login-container'>
          <h2>Register with new account</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'user.jpg'} alt=""/>
            <input type='text' placeholder='Enter your name'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'phone.jpg'} alt=""/>
            <input type='number' placeholder='Enter your phone number'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'mail.jpg'} alt=""/>
            <input type='email' placeholder='Enter your email'/>
          </div>
          <div className='input-group'>
             <img className='left-icon' src={IMGURL + 'lock.jpg'} alt=""/>
            <input type={togglePassword} placeholder='Enter your password'/>
            <img className='right-icon' src={IMGURL + 'eye icon.jpg'} alt="" onClick={()=>togglePwd()}/>
          </div>
          <div className='input-group'>
             <img className='left-icon' src={IMGURL + 'lock.jpg'} alt=""/>
            <input type={togglePassword} placeholder='Confirm your password'/>
            <img className='right-icon' src={IMGURL + 'eye icon.jpg'} alt="" onClick={()=>togglePwd()}/>
          </div>
          <button>Create Account</button>
          <p>Already have an account?<label onClick={()=>switchView()}>Sign in</label></p>
        </div>
        }
    </div>
  )
}
