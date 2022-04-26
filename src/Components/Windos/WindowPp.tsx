import React from 'react'
import { motion } from 'framer-motion'
import "./Window.scss"
export const WindowPp = ({setToggleWindowPp}) => {
  return (
    <motion.div className='window flex'
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        <div className='button-exit' onClick={()=>setToggleWindowPp(false)}>Exit</div>
        <h1>Polityka prywatności</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

        <p>
            ale wiesz... to będzie scrolowane w dół.... więc nie martw się o miejsce, jakby co
        </p>
    </motion.div>
  )
}
