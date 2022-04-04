import React from 'react'
import "./Helps.scss"

import { FiDatabase } from "react-icons/fi"
import { BiInfinite }  from "react-icons/bi"
import { BsGlobe }  from "react-icons/bs"



export const Helps = () => {
  return (
    <div className='Helps flex'>
        <h1>Pomożemy rozwiązać Twój problem w biznesie i nie tylko</h1>
        <div className='Helps__content flex'>   
            <div className='Helps__content-box flex'>
                <FiDatabase size={35}/>
                <h3>UNLIMITED STORAGE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
            <div className='Helps__content-box flex'>
                <BiInfinite size={35}/>
                <h3>UNMETERED BANDWIDTH</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
            <div className='Helps__content-box flex'>
                <BsGlobe size={35}/>
                <h3>DOMAIN REGISTRATION</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
        </div>
        <a href="#About"><div className='button'>O INT</div></a>

    </div>
  )
}
