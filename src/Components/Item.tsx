import React from 'react'
import './Item.scss'

export const Item = ({icon, title, description}) => {
  return (
    <div className='Item'>
         {icon}
          <h3>{title}</h3>
          <p>{description}</p>
    </div>
 
  )
}
