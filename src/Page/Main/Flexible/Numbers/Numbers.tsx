import React from 'react'
import './Numbers.scss'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';

export const Numbers = ({number, text, type}) => {
  function App() {
    return (
      <div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div>
              {isVisible ? <CountUp end={number} /> : null}0{type}
            </div>
          )}
        </VisibilitySensor>
      </div>
    );
  }
  
  return (
    <div className='Numbers flex' onBlur={()=>console.log("elo")} onFocus={()=>console.log("elo")}>
        <h2>{App()}</h2>
        <h3>{text}</h3>
        <hr style={{width:"30%",height:"3px",color:"white",border:"0px",backgroundColor:"white"}}/>
    </div>
  )
}
