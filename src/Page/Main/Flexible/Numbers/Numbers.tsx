import React from 'react'
import './Numbers.scss'

export const Numbers = ({number,text}) => {
  return (
    <div className='Numbers flex'>
        <h2>{number}</h2>
        <h3>{text}</h3>
        <hr style={{width:"30%",height:"3px",color:"white",border:"0px",backgroundColor:"white"}}/>
    </div>
  )
}
