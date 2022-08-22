import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'

export const Header = () => {

  return (
    <motion.div className='Header flex' id="Header"
      initial={{opacity:0}}
      transition={{duration:1.7}}
      whileInView={{opacity:1}}
    >
      <div className='Header__content flex'>
        <div className='Header__content-main flex'>
        <text>INTKOD sp. z o.o.</text>
        <h1>Wdrażanie nowych technologii</h1>
        <div className='Header__content-buttons flex'>
          <a href="#About"><div className='button'>O INTKOD</div></a>
          <text></text>
          <a href="#Footer"><div className='button'>Kontakt</div></a>
        </div>
        </div>       
      </div>
    </motion.div>
  )
}