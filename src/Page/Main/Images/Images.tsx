import React from 'react'
import "./Images.scss"

export const Images = () => {
  return (
    <div className='Images flex'>
        <h1 className='h1-margin'>Ostatnie zlecenia</h1>

        <div className='Images__pictures'>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture0'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture1'/>
            <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d661c0452b915eccbfc166da/pexelsphoto972325.jpeg" alt='picture2'/>     
        </div>
    </div>
  )
}
