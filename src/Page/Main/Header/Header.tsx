import React from 'react'
import { useNavigate } from "react-router-dom";
import './Header.scss'

function Header() {
  let navigate = useNavigate(); 

  return (
    <div className='Header flex' id="Header">
      <div className='Header__content flex'>
        <div className='Header__content-image'></div>
        <div className='Header__content-main flex'>
        <text>Random page</text>
        <h1>Lorem Ipsum</h1>
        <div className='Header__content-buttons flex'>
          <div className='button'>About as</div>
          <text>OR</text>
          <div className='button' onClick={()=> navigate("/Contact")}>Contact</div>
        </div>
        </div>       
      </div>
    </div>
  )
}

export default Header