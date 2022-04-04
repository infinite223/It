import React from 'react'

import './Header.scss'

export const Header = () => {

  return (
    <div className='Header flex' id="Header">
      <div className='Header__content flex'>
        <div className='Header__content-image'></div>
        <div className='Header__content-main flex'>
        <text>INT sp. z o.o.</text>
        <h1>Wdrażanie nowych technologii</h1>
        <div className='Header__content-buttons flex'>
          <a href="#About"><div className='button'>O INT</div></a>
          <text></text>
          <a href="#Footer"><div className='button'>Kontakt</div></a>
        </div>
        </div>       
      </div>
    </div>
  )
}