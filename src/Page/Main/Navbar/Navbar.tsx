import React, {useState, useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import { IoCloseOutline} from 'react-icons/io5'
import { motion } from 'framer-motion';
import './Navbar.scss'

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false);
  let navigate = useNavigate(); 
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['Navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  return (
    <div className='Navbar'>
      <div className='Navbar-logo' onClick={()=> navigate("/")}>INT</div>
      <div className='Navbar__menu'>
        <div className='Navbar__menu-link' onClick={()=> navigate("/")}>Home</div>
        <div className='Navbar__menu-link'>Abaut</div>
        <div className='Navbar__menu-link' onClick={()=> navigate("/Contact")}>Contact</div>
      </div>
      
      <div className='Navbar__menu-smallscreen'>
        <GiHamburgerMenu color='white' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu&&<motion.div 
           animate={{width:[10,25,50,100,150,200,240,240,250]}}
           transition={{ duration: .3 }}    
        className='Navbar__menu-options-smallscreen'
        >
          <IoCloseOutline fontSize={27} className='close' onClick={()=>setToggleMenu(false)}/>
          <div className='Navbar__menu-link-small' onClick={()=> navigate("/")}>Home</div>
          <div className='Navbar__menu-link-small'>About</div>
          <div className='Navbar__menu-link-small' onClick={()=> navigate("/Contact")}>Contact</div>
        </motion.div>}
      </div>

    </div>
  )
}

export default Navbar