import React from 'react'
import { FiDatabase } from "react-icons/fi"
import './Item.scss'

export const Item = ({icon}) => {
  return (
    <div className='Item'>
         {icon}
          <h3>UNLIMITED STORAGE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>
  )
}
