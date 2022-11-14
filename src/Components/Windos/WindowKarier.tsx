import React, {useState, useEffect} from 'react'
import { send } from 'emailjs-com';
import "./Window.scss"
import { motion } from 'framer-motion';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

export const WindowKarier = ({setToggleWindowKarier}) => {
    const [ scrolled, setScrolled ]=React.useState(false);
    const [fileCv, setFileCv] = useState(null)
    const [ showApply, setShowApply ] = useState("apply flex");
    const [ prog, setProg ] = useState(0)
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
    
      const emailSend = () => {
        send(
          'service_a5oo0cn',
          'template_51w18ub',
          toSend,
          'csl85PGe4P3ps10T1'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('SUCCESS!')
          })
          .catch((err) => {
            console.log('FAILED...', err);
            alert('FAILED!')
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
      console.log(fileCv)
      const onSubmit = (e) => {
        if(toSend.email && fileCv){ 
          const docRef = doc(db, "usersData", toSend.email);
          //if.... email...
          e.preventDefault();
          setDoc(docRef, toSend)
          .then(() => {
              console.log("Document has been added successfully");
          })
          .catch(error => {
              console.log(error);
          })
          const file = e.target[0].files[0];
          uploadCV(file)
        }
        else {
          alert("Nie podano wszystkich wymaganych danych")
        }
      }

      const uploadCV = (file) => {
        if(!file) return;
        const storageRef = ref(storage, `/CV/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snamshot)=> {
          const prog = Math.round((snamshot.bytesTransferred / snamshot.totalBytes) * 100)
          setProg(prog)
        },
          (err) => console.log(err),
          ()=> {
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url)=> console.log(url))
          }
        )
      }

      useEffect(() => {
        if(prog===100){
          emailSend()
        }
      }, [prog])

      function fileChange(event) {
        event.preventDefault();
       // console.log(event.target.files[0])
        setFileCv(event.target.files[0]);
      }
      
  
      
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
                        <option value="none">Forma grzecznościowa</option>
                        <option value="Pan">Pan</option>
                        <option value="Pani">Pani</option>
                    </select>
                    <input  
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Imię'/>
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
                    placeholder='Wojewódżtwo'/>
            </form>
            <h2>Dane Zawodowe</h2>
            <form className='my-form'>
                    <select 
                      name="exp" 
                      value={toSend.exp}
                      onChange={handleChange}
                    >
                        <option value="none">Doświadczenie</option>
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
                        <option value="Wykształcenie">
                            Wykształcenie                    
                        </option>
                        <option value="Bez wykształcenia">              
                            Bez wykształcenia
                        </option>
                        <option value="Podstawowe">
                            Podstawowe
                        </option>
                        <option value="Zawodowe">
                            Zawodowe
                        </option>            
                        <option value="Średnie zawodowe"> 
                            Średnie zawodowe
                        </option>
                        <option value="5 Średnie ogólnokształcące">
                            Średnie ogólnokształcące
                        </option>
                        <option value="Wyższe licencjackie">
                            Wyższe licencjackie
                        </option>
                        <option value="Wyższe inżynierskie">      
                            Wyższe inżynierskie
                        </option>
                        <option value="Wyższe magisterskie"> 
                            Wyższe magisterskie
                        </option>
                        <option value="Wyższe mgr inż.">                 
                            Wyższe mgr inż.
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
            <input style={{borderWidth:1, width:"95%", marginTop:'10px'}}  className='custom-file-input'  type="file"  name='cv' onChange={fileChange}/>
           <h2 style={{fontSize:"13px"}}>Zaaplikuj a sprawdzimy Twoje zgłoszenie i odezwiemy się w ciągu 24 godzin.</h2>
                <div className='button-apply' onClick={()=>setShowApply("apply show flex")}>Aplikuj</div>
                <div className={showApply}>
                  <text>Czy na pewno chcesz wysłać zgłoszenie?</text>
                  <input className='button flex' onClick={()=>setShowApply("apply flex")} type="button"  value="Nie"/>
                  <input className='button flex' onClick={()=>(setShowApply("apply flex"))} type="submit" value="Tak" />
              
                </div>
            </form>
        </div>
    </motion.div>
  )
}
