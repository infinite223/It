import React from 'react'
import "./Helps.scss"

import priorityIcon from "../../../images/icons/priority.png"
import satisfactionIcon from "../../../images/icons/satisfaction.png"
import teamIcon from "../../../images/icons/management.png"



export const Helps = () => {
  return (
    <div className='Helps flex'>
        <h1>Pomożemy rozwiązać Twój problem w biznesie i nie tylko</h1>
        <div className='Helps__content flex'>   
            <div className='Helps__content-box flex'>
                <img src={priorityIcon} width="40px"/>
                <h3>PRIORYTETY</h3>
                <p>
                    Głównym priorytetem naszego przędsiębiorstwa jest rozwiązywanie i utrzymywaniem 
                    infrastruktury informatycznej Państwa firm.
                </p>
            </div>
            <div className='Helps__content-box flex'>
                <img src={satisfactionIcon} width="40px"/>
                <h3>DOŚWIADCZENIE</h3>
                <p>
                    Posiadamy długoletnie doświadczenie w doradztwie i tworzeniu aplikacji,stron internetowych i nie tylko.
                </p>
            </div>
            <div className='Helps__content-box flex'>
                <img src={teamIcon} width="45px"/>
                <h3>JAK DZIAŁAMY</h3>
                <p>
                    Działamy i pilnujemy Państwa firmy przez 24h na dobe by dostarczać najlepsze usługi.
                    Pomożemy rozwiązać Twój problem w biznesie i nie tylko
                </p>
            </div>
        </div>
        <a href="#About"><div className='button'>O INT</div></a>
    </div>
  )
}
