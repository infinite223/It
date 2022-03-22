import React from 'react'
import "./Helps.scss"
import { FiDatabase } from "react-icons/fi"
import { BiInfinite }  from "react-icons/bi"
import { BsGlobe }  from "react-icons/bs"



function Helps() {
  return (
    <div className='Helps flex'>
        <h1>We help and solve your business problem</h1>
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
        <div className='button'>About as</div>

    </div>
  )
}

export default Helps