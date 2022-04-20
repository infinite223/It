import React, {useState, useEffect} from 'react'
import "./Window.scss"
export const WindowKarier = ({setToggleWindowKarier}) => {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['window'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
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
                        <option>2 lata</option>
                        <option>3 lata</option>
                        <option>4 lata</option>
                        <option>5 lat</option>
                        <option>6 lat</option>
                        <option>7 lat</option>
                        <option>8 lat</option>
                        <option>9 lat</option>
                        <option>10 lat</option>
                        <option>15 lat</option>
                        <option>20 lat</option>
                    </select>
                    <select>              
                        <option value="0">
                            Wykształcenie                    
                        </option>
                        <option value="1">              
                            Bez wykształcenia
                        </option>
                        <option value="2">
                            Podstawowe
                        </option>
                        <option value="3">
                            Zawodowe
                        </option>            
                        <option value="4"> 
                            Średnie zawodowe
                        </option>
                        <option value="5">
                            Średnie ogólnokształcące
                        </option>
                        <option value="6">
                            Wyższe licencjackie
                        </option>
                        <option value="7">      
                            Wyższe inżynierskie
                        </option>
                        <option value="8"> 
                            Wyższe magisterskie
                        </option>
                        <option value="9">                 
                            Wyższe mgr inż.
                        </option>            
                        <option value="10">                    
                            Doktorat
                        </option>            
                        <option value="11">                   
                            Doktor hab.
                        </option>        
                        <option value="12">                   
                            Profesor
                        </option>           
                </select>
                                   
            </form>
            <h2>Email</h2>
            <form action="...">
                <input type="text" placeholder='Email'/>
            </form>
            <h2>CV</h2>
            <form action="...">
                <input className='custom-file-input' type="file"/>
            </form>
            <button className='button-apply'>Aplikuj</button>
        </div>
        
    </div>
  )
}
