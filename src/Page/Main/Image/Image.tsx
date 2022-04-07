import React from 'react'
import "./Image.scss"
import image from "../../../images/iphones.jpg"

export const Image = () => {
  return (
    <div className='Image flex'>
        <div className='Image-left flex'>
            <h1>Skupiamy się na dostarczaniu najlepszych usług w Polsce i Europie</h1>
            <p>Wyznajemy zasadę, że sukces firmy jest możliwy tylko, gdy sukcesy odnoszą nasi Partnerzy. Dlatego nie przestajemy inwestować w rozwój i optymalizację oferowanych przez nas usług. Dzielimy się wiedzą oraz prowadzimy działania wspierające Państwa biznes. </p>
            {//<img width="350px" src={image} alt="picture9"/>
}
        </div>
        <div className='Image-right flex'>
       {/* <p>Wyznajemy zasadę, że sukces firmy jest możliwy tylko, gdy sukcesy odnoszą nasi Partnerzy. Dlatego nie przestajemy inwestować w rozwój i optymalizację oferowanych przez nas usług. Dzielimy się wiedzą oraz prowadzimy działania wspierające Państwa biznes. </p>*/}
        </div>
    </div>
  )
}
