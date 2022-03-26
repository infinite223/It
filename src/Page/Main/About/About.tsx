import React from 'react'
import  {FaQuestion} from "react-icons/fa"
import "./About.scss"

export const About = () => {
  return (
    <div className='About flex' id="About">
        <h1>About Us</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis doloremque sunt voluptatem, mollitia recusandae ratione quae! Quia voluptates 
            hic molestiae reprehenderit et? Ut cum laudantium facilis. Tempora magni numquam nobis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className='About__icon'>
            <FaQuestion size={"100%"}/>
        </div>
    </div>
  )
}
