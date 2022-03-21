import React from 'react'
import {Item} from "./../../../Components/Item.tsx"
import { FiDatabase } from "react-icons/fi"
import "./Services.scss"

export const Services = () => {
  return (
    <div className='Services flex'>
        <div className='Services__content flex'>
            <h1>Our Services</h1>
            <div className='Services__content-items flex'>
                <Item icon={<FiDatabase size={35}/>}/>
                <Item icon={<FiDatabase size={35}/>}/>
                <Item icon={<FiDatabase size={35}/>}/>
                <Item icon={<FiDatabase size={35}/>}/>
                <Item icon={<FiDatabase size={35}/>}/>
                <Item icon={<FiDatabase size={35}/>}/>
            </div>
        </div>
    </div>
  )
}
