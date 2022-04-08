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
            <h2>Dane Zawodowe</h2>
            <form action="...">
                    <select name="nazwa">
                        <option>Doświadczenie</option>
                        <option>0 lat</option>
                        <option>1 rok</option>
                    </select>
                    <select name="nazwa">
                        <option>Wykształcenie</option>
                        <option>Brak wykształcenia</option>
                        <option>Podstawowe</option>
                        <option>Sportowa (bezmózg totalny)</option>
                        <option>Zawodowe</option>
                        <option>Sredie zawodowe</option>
                        <option>Student debil z PO</option>
                    </select>
            </form>
            <h2>Email</h2>
            <form action="...">
                <input type="text" placeholder='Email'/>
            </form>
            <h2>CV</h2>
            <form action="...">
                <input className='input-file' type="file"  placeholder='dodaj swoje CV'/>
            </form>
        </div>
        
    </div>
  )
}
