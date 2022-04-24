import React from 'react'
import './Numbers.scss'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';

function App() {
  return (
    <div className="App">
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={1000} /> : null}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}

export const Numbers = ({number,text}) => {
  return (
    <div className='Numbers flex' onBlur={()=>console.log("elo")} onFocus={()=>console.log("elo")}>
        <h2>{number}{App()}</h2>
        <h3>{text}</h3>
        <hr style={{width:"30%",height:"3px",color:"white",border:"0px",backgroundColor:"white"}}/>
    </div>
  )
}
