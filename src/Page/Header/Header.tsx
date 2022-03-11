import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className='Header flex'>
      <div className='Header__content flex'>
        <div className='Header__content-image'></div>
        <div className='Header__content-main flex'>
        <text>Random page</text>
        <h1>Lorem Ipsum</h1>
        <div className='Header__content-buttons flex'>
          <div className='button'>About as</div>
          <text>OR</text>
          <div className='button'>Contact</div>
        </div>
        </div>       
      </div>
    </div>
  )
}

export default Header