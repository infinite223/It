import React, {useState, useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import { IoCloseOutline} from 'react-icons/io5'
import { motion } from 'framer-motion';
import './Navbar.scss'

export const Navbar = () => {
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
    <motion.div className='Navbar' 
      initial={{y:-150}}
      animate={{y:0}}
      transition={{type:'tween'}}
    >
      <a href="#Header"><div className='Navbar-logo'>INTKOD</div></a>
      <div className='Navbar__menu'>
        <a href="#Header"><div className='Navbar__menu-link'>Home</div></a>
        <a href="#About"><div className='Navbar__menu-link'>O INTKOD</div></a>
        <a href="#Services"><div className='Navbar__menu-link'>Usługi</div></a>
        <a href="#Footer"><div className='Navbar__menu-link'>Kontakt</div></a>
        {/*<a href="#Karier"><div className='Navbar__menu-link'>Informacje</div></a>*/}
      </div>
      
      <div className='Navbar__menu-smallscreen'>
        <GiHamburgerMenu color='#bfa68a' fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu&&<motion.div 
           animate={{width:[10,25,50,100,150,200,240,240,250]}}
           transition={{ duration: .3 }}    
        className='Navbar__menu-options-smallscreen'
        >
          <IoCloseOutline fontSize={27} className='close' onClick={()=>setToggleMenu(false)}/>
          <a href="#Header"><div className='Navbar__menu-link-small' >Home</div></a>
          <a href="#About"><div className='Navbar__menu-link-small'>O INTKOD</div></a>
          <a href="#Services"><div className='Navbar__menu-link-small'>Usługi</div></a>
          <a href="#Footer"><div className='Navbar__menu-link-small'>Kontakt</div></a>
          <a href="#Karier"><div className='Navbar__menu-link-small'>Informacje</div></a>
        </motion.div>}
      </div>
    </motion.div>
  )
}
