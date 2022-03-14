import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { IoCloseOutline} from 'react-icons/io5'
import './Navbar.scss'

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar-logo'>Logo</div>
      <div className='Navbar__menu'>
        <div className='Navbar__menu-link'>Home</div>
        <div className='Navbar__menu-link'>Abaut</div>
        <div className='Navbar__menu-link'>Contact</div>
      </div>
      
      <div className='Navbar__menu-smallscreen'>
        <GiHamburgerMenu color='black' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu&&<div className='Navbar__menu-options-smallscreen'>
          <IoCloseOutline fontSize={27} className='close' onClick={()=>setToggleMenu(false)}/>
          <div className='Navbar__menu-link-small'>Home</div>
          <div className='Navbar__menu-link-small'>About</div>
          <div className='Navbar__menu-link-small'>Contact</div>
        </div>}
      </div>

    </div>
  )
}

export default Navbar