import React from 'react'
import "./Window.scss"
export const Window = ({setToggleWindow}) => {
  return (
    <div className='window flex'>
        <div className='button-exit' onClick={()=>setToggleWindow(false)}>Exit</div>
        <h1>Regulamin</h1>
        <p>Mąż przed wyjściem do pracy mówi do żony:<br/>
        - Wiesz, po goleniu czuje się tak, jakbym miał ze dwadzieścia lat mniej ...<br/>
        - A czy nie mógłbyś się golić wieczorem? - pyta się żona.</p>

        <p>
            ale wiesz... to będzie scrolowane w dół.... więc nie martw się o miejsce, jakby co
        </p>
    </div>
  )
}
