import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Navbar-logo'>Logo</div>
      <div className='Navbar__menu'>
        <div className='Navbar__menu-link'>Home</div>
        <div className='Navbar__menu-link'>Abaut</div>
        <div className='Navbar__menu-link'>Contact</div>
      </div>
    </div>
  )
}

export default Navbar