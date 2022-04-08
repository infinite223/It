import React from 'react'
import "./Window.scss"
export const WindowInfo = ({setToggleWindowInfo}) => {
  return (
    <div className='window flex'>
        <div className='button-exit' onClick={()=>setToggleWindowInfo(false)}>Exit</div>
        <h1>Informacje</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

        <p>
            ale wiesz... to będzie scrolowane w dół.... więc nie martw się o miejsce, jakby co
        </p>
    </div>
  )
}
