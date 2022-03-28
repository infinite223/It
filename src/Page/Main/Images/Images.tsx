import React from 'react'
import "./Images.scss"

export const Images = () => {
  return (
    <div className='Images flex'>
        <div className='Images__banner flex'>
            <h1>Need More Information?</h1>
            <a href="#About"><div className='button_white'>ABOUT US</div></a>
        </div>

        <h1 className='h1-margin'>Our Latest Work</h1>

        <div className='Images__pictures'>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture0'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture1'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture2'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/75e2f326ddfa5d2f90704173/pexels-photo-911758.jpeg" alt='picture3'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture4'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture5'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture6'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture7'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/75e2f326ddfa5d2f90704173/pexels-photo-911758.jpeg" alt='picture8'/>
        </div>
    </div>
  )
}
