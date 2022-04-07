import React from 'react'
import "./Window.scss"
export const WindowKarier = ({setToggleWindowKarier}) => {
  return (
    <div className='window'>
        <div className='button-exit' onClick={()=>setToggleWindowKarier(false)}>Exit</div>
        <h1>Kariera</h1>
        
        <div className='window__content'>
            <h1>Aplikuj do naszej firmy</h1>
            <h2>Dane osobowe</h2>
            <div className='window__content-data'>
                <form action="...">
                    <select name="nazwa">
                        <option>Forma grzecznościowa</option>
                        <option>Pan</option>
                        <option>Pani</option>
                    </select>
                    <input type="text" placeholder='Imię'/>
                    <input type="text" placeholder='Nazwisko'/>
                </form>
            </div>
            <h2>Data Urodzenia</h2>
            <form action="...">
                <input type="date"/>
            </form>
            <h2>Dane Kontaktowe</h2>
            <form action="...">
                <input type="number" placeholder='numer telefonu'/>
                <input type="text" placeholder='Miasto'/>
                <input type="text" placeholder='Wojewódżtwo'/>
            </form>
        </div>
        
    </div>
  )
}
