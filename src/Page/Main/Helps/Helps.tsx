import React from 'react'
import "./Helps.scss"

import { FiDatabase } from "react-icons/fi"
import { BiInfinite }  from "react-icons/bi"
import { BsGlobe }  from "react-icons/bs"

import priorityIcon from "../../../images/priority.png"
import satisfactionIcon from "../../../images/satisfaction.png"
import teamIcon from "../../../images/management.png"



export const Helps = () => {
  return (
    <div className='Helps flex'>
        <h1>Pomożemy rozwiązać Twój problem w biznesie i nie tylko</h1>
        <div className='Helps__content flex'>   
            <div className='Helps__content-box flex'>
                {/*<FiDatabase size={35}/>*/}
                <img src={priorityIcon} width="40px"/>
                <h3>PRIORYTETY</h3>
                <p>
                    Głównym priorytetem naszego przędsiębiorstwa jest rozwiązywanie i utrzymywaniem 
                    infrastruktury informatycznej Państwa firm.
                </p>
            </div>
            <div className='Helps__content-box flex'>
                {/*<BiInfinite size={35}/>*/}
                <img src={satisfactionIcon} width="40px"/>
                <h3>DOŚWIADCZENIE</h3>
                <p>
                    Posiadamy długoletnie doświadczenie w doradztwie i tworzeniu aplikacji,stron internetowych i nie tylko.
                </p>
            </div>
            <div className='Helps__content-box flex'>
                {/*<BsGlobe size={35}/>*/}
                <img src={teamIcon} width="45px"/>
                <h3>JAK DZIAŁAMY</h3>
                <p>
                    Działamy i pilnujemy Państwa firmy przez 24h na dobe by dostarczać najlepsze usługi.
                    to daj do Pomożemy rozwiązać Twój problem w biznesie i nie tylko
                </p>
            </div>
        </div>
        <a href="#About"><div className='button'>O INT</div></a>
    </div>
  )
}
