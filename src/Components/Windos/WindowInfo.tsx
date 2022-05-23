import React from 'react'
import "./WindowInfo.scss"
import { motion } from 'framer-motion';
import Cookies from 'js-cookie'
export const WindowInfo = ({setToggleWindowPp, setToggleWindowInfo, accept, setAccept}) => {
  console.log(accept)
  return (
    <motion.div className='window-Info '
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        {accept&&<div className='button-exit' onClick={()=>setToggleWindowInfo(false)}>Exit</div>}
        <div className='window__content'>
          <p>Korzystając ze strony zgadzasz się na używanie plików cookies, które są instalowane na Twoim urządzeniu. 
            Więcej o plikach cookies oraz o możliwościach zmiany ich ustawień dowiesz się w 
            <text onClick={()=>setToggleWindowPp(true)}><b> Polityka prywatności.</b></text></p>
            {!accept&&<div className='button-accept' onClick={()=>(setAccept(true),setToggleWindowInfo(false), Cookies.set("user","accept"))}>Akceptuje</div>}
        </div>
         
    </motion.div>
  )
}
