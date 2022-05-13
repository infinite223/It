import React from 'react'
import "./Window.scss"
import { motion } from 'framer-motion';
import Cookies from 'js-cookie'
export const WindowInfo = ({setToggleWindowPp, setToggleWindowInfo, accept, setAccept}) => {
  console.log(accept)
  return (
    <motion.div className='window flex'
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        {accept&&<div className='button-exit' onClick={()=>setToggleWindowInfo(false)}>Exit</div>}
        <h1>Informacje</h1>
        <div className='window__content'>
          <p>Korzystając ze strony zgadzasz się na używanie plików cookies, które są instalowane na Twoim urządzeniu. 
            Więcej o plikach cookies oraz o możliwościach zmiany ich ustawień dowiesz się w 
            <text onClick={()=>setToggleWindowPp(true)}><b> Polityka prywatności.</b></text></p>
        </div>
          {!accept&&<div className='button-accept' onClick={()=>(setAccept(true),setToggleWindowInfo(false), Cookies.set("user","accept"))}>Akceptuje</div>}
    </motion.div>
  )
}
