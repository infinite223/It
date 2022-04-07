import React from 'react'
import  {FaQuestion} from "react-icons/fa"
import { Numbers } from '../Flexible/Numbers/Numbers.tsx'
import "./About.scss"

export const About = () => {
  return (
    <div className='About flex' id="About">
      <p>
        <h1>O INT</h1>
        
        INT to jeden z największych na świecie dystrybutorów technologii. Pomagamy firmom takim jak HP, Apple, Cisco, Microsoft — i setkom innych — wprowadzić swoje produkty na rynek, a także oferujemy szeroki zakres usług wsparcia technicznego i biznesowego.

        Certyfikujemy, szkolimy, instruujemy i wspieramy naszych klientów, pomagamy w konfiguracji, instalacji i finansowaniu ich zakupów. Wiele urządzeń sprzętowych i aplikacji oprogramowania, z których korzystasz na co dzień, przeszło przez nasze centra logistyczne w drodze na rynek.
        </p>
       {/* <div className='About__icon'>
            <FaQuestion size={"100%"}/>
  </div>*/}

        <div className='Flexible__baner flex'>
            <div className='Flexible__baner-wrap flex'>
                <Numbers number="120" text="Zadowolonych firm"/>
                <Numbers number="1500" text="Wykonanych projektów"/>
                <Numbers number="100%" text="Satysfakcji"/>           
            </div>      
         </div>
    </div>
  )
}
