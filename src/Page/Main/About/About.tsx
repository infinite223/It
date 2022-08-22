import React from 'react'
import { Numbers } from '../Flexible/Numbers/Numbers.tsx'
import "./About.scss"
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className='About flex' id="About"
   >
      <motion.p
          initial={{opacity:0}}
          transition={{duration:1.7}}
          whileInView={{opacity:1}}
      >
        <h1>O INTKOD</h1>
         INTKOD to szybko rozwijająca się firma dostarczająca technologię. Pomagamy małym, 
          średnim i dużym firmom wprowadzić swoje produkty na rynek, a także oferujemy szeroki zakres 
          usług wsparcia technicznego i biznesowego. Certyfikujemy, szkolimy, instruujemy i wspieramy naszych klientów, 
          pomagamy w konfiguracji, instalacji i finansowaniu ich zakupów. Pomagamy rosnąć naszym klientom dzięki
          zoptymalizowanym skryptom pomagającym wyjść na świat. Dzięki
          doświadczeniu naszych pracowników, udoskonalamy firmy poprzez tworzenie i analizę  danych.
        </motion.p>

        <div className='Flexible__baner flex'>
            <div className='Flexible__baner-wrap flex'>
                <Numbers number={12}  text="Zadowolonych firm"/>
                <Numbers number={150} text="Wykonanych projektów"/>
                <Numbers number={10} type="%" text="Satysfakcji"/>           
            </div>      
         </div>
    </div>
  )
}
