import React from 'react'
import { Numbers } from '../Flexible/Numbers/Numbers.tsx'
import "./About.scss"

export const About = () => {
  return (
    <div className='About flex' id="About">
      <p>
        <h1>O INT</h1>
          INT to jedna z największych na świecie dystrybutorów technologii. 
          Pomagamy małym, średnim i dużym firmom wprowadzić swoje produkty na rynek, 
          a także oferujemy szeroki zakres usług wsparcia technicznego i biznesowego.
          Certyfikujemy, szkolimy, instruujemy i wspieramy naszych klientów, pomagamy w konfiguracji,
          instalacji i finansowaniu ich zakupów. Wiele aplikacji oprogramowania, z których korzystasz na co dzień,
          została stworzone właśnie w naszej firmie, pomagamy rosnąć naszym klientom dzięki zoptypmalizowanym skrypton 
          pomagającym wyjść na świat. Dzięki doświadczeniu naszych pracowników, udoskonalamy firmy poprzez tworzenie i 
          analize danych.
        </p>

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
