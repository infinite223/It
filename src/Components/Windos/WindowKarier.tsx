import React, {useState, useEffect} from 'react'
import { send } from 'emailjs-com';
import "./Window.scss"
import { motion } from 'framer-motion';

export const WindowKarier = ({setToggleWindowKarier}) => {
    const [ scrolled, setScrolled ]=React.useState(false);
    const [ showApply, setShowApply ] = useState("apply flex");
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

    const [toSend, setToSend] = useState({
        from_name: '',
        from_lastname: '',
        date:'',
        numer:'',
        city:'',
        province:'',
        email:'',
        form:'',
        exp:'',
        education:''
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_a5oo0cn',
          'template_51w18ub',
          toSend,
          'csl85PGe4P3ps10T1'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
  
      
  return (
    <motion.div className='window'
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
        <div className='button-exit' onClick={()=>setToggleWindowKarier(false)}>Exit</div>
        <h1>Kariera</h1>
        
        <div className='window__content'>
         <form onSubmit={onSubmit}>
            <h2 style={{fontSize:"30px"}}>Aplikuj do naszej firmy</h2>
            <h2>Dane osobowe</h2>
            <div className='window__content-data'>
                <form className='my-form'>
                    <select
                        name="form" 
                        value={toSend.form}
                        onChange={handleChange} >
                        <option value="none">Forma grzeczno??ciowa</option>
                        <option value="Pan">Pan</option>
                        <option value="Pani">Pani</option>
                    </select>
                    <input  
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Imi??'/>
                    <input
                        type="text" 
                        name='from_lastname'
                        value={toSend.from_lastname}
                        onChange={handleChange} 
                        placeholder='Nazwisko'/>
                </form>
            </div>
            <h2>Data Urodzenia</h2>
            <form className='my-form'>
                <input
                    name='date'
                    value={toSend.date}
                    onChange={handleChange}  
                    type="date"/>
            </form>
            <h2>Dane Kontaktowe</h2>
            <form className='my-form'>
                <input 
                    name='numer'
                    value={toSend.numer}
                    onChange={handleChange}  
                    type="number"
                    placeholder='numer telefonu'/>
                <input 
                    name='city'
                    value={toSend.city}
                    onChange={handleChange}              
                    type="text" 
                    placeholder='Miasto'/>
                <input
                    name='province'
                    value={toSend.province}
                    onChange={handleChange}  
                    type="text" 
                    placeholder='Wojew??d??two'/>
            </form>
            <h2>Dane Zawodowe</h2>
            <form className='my-form'>
                    <select 
                      name="exp" 
                      value={toSend.exp}
                      onChange={handleChange}
                    >
                        <option value="none">Do??wiadczenie</option>
                        <option value="0 lat">0 lat</option>
                        <option value="1 rok">1 rok</option>
                        <option value="2 lata">2 lata</option>
                        <option value="3 lata">3 lata</option>
                        <option value="4 lata">4 lata</option>
                        <option value="5 lat">5 lat</option>
                        <option value="6 lat">6 lat</option>
                        <option value="7 lat">7 lat</option>
                        <option value="8 lat">8 lat</option>
                        <option value="9 lat">9 lat</option>
                        <option value="10 lat">10 lat</option>
                        <option value="15 lat">15 lat</option>
                        <option value="20 lat">20 lat</option>
                    </select>
                    <select 
                      name="education" 
                      value={toSend.education}
                      onChange={handleChange}>              
                        <option value="Wykszta??cenie">
                            Wykszta??cenie                    
                        </option>
                        <option value="Bez wykszta??cenia">              
                            Bez wykszta??cenia
                        </option>
                        <option value="Podstawowe">
                            Podstawowe
                        </option>
                        <option value="Zawodowe">
                            Zawodowe
                        </option>            
                        <option value="??rednie zawodowe"> 
                            ??rednie zawodowe
                        </option>
                        <option value="5 ??rednie og??lnokszta??c??ce">
                            ??rednie og??lnokszta??c??ce
                        </option>
                        <option value="Wy??sze licencjackie">
                            Wy??sze licencjackie
                        </option>
                        <option value="Wy??sze in??ynierskie">      
                            Wy??sze in??ynierskie
                        </option>
                        <option value="Wy??sze magisterskie"> 
                            Wy??sze magisterskie
                        </option>
                        <option value="Wy??sze mgr in??.">                 
                            Wy??sze mgr in??.
                        </option>            
                        <option value="Doktorat">                    
                            Doktorat
                        </option>            
                        <option value="Doktor hab.">                   
                            Doktor hab.
                        </option>        
                        <option value="Profesor">                   
                            Profesor
                        </option>           
                </select>
                                   
            </form>
            <h2>Email</h2>
            <form className='my-form'>
                <input      
                    name='email'
                    value={toSend.email}
                    onChange={handleChange} 
                    type="text" placeholder='Email'/>
            </form>
           <h2 style={{fontSize:"13px"}}>Zaaplikuj a sprawdzimy Twoje zg??oszenie i odezwiemy si?? w ci??gu 24 godzin.</h2>
             {/*<form className='my-form'>
                <input
                    className='custom-file-input' 
                    name='cv'               
                    onChange={handleChange} 
                    type="file"/>
            </form>*/}
                
                <div className='button-apply' onClick={()=>setShowApply("apply show flex")}>Aplikuj</div>
                <div className={showApply}>
                  <text>Czy na pewno chcesz wys??a?? zg??oszenie?</text>
                  <input className='button flex' onClick={()=>setShowApply("apply flex")} type="button"  value="Nie"/>
                  <input className='button flex' onClick={()=>(setShowApply("apply flex"))} type="submit" value="Tak" />
              
                </div>
            </form>
        </div>
    </motion.div>
  )
}
