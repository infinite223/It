import React from 'react'
import "./Image.scss"
import image from "../../images/iphones.jpg"

function Image() {
  return (
    <div className='Image flex'>
        <div className='Image-left flex'>
            <h1>We focus on ensuring a competitive edge</h1>
            <img width="400px" src={image}/>
        </div>
        <div className='Image-right flex'>
        Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.
         You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. 
        </div>
    </div>
  )
}

export default Image