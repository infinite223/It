import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { motion } from 'framer-motion';
import { MdOutlineTextsms } from "react-icons/md"
import { WindowReg } from '../../../Components/Windos/WindowReg.tsx';
import { WindowKarier } from '../../../Components/Windos/WindowKarier.tsx';

import "./Footer.scss"

export const Footer = ({ setToggleWindowPp, setToggleWindowInfo }) => {
  const [toggleWindowReg, setToggleWindowReg] = useState(false);
  const [toggleWindowKarier, setToggleWindowKarier] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_a5oo0cn',
      'template_pj34g0e',
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
  

  return (
    <motion.section className='Footer flex disable-selection' id="Footer"
      initial={{y:300}}
      whileInView={{y:0}}
      transition={{type:'spring', duration:1}}
    >
      
      <div className='Footer__contact flex'>   
       <motion.form onSubmit={onSubmit}
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:2.5, delay:.2}}
       >
            
          <h1>Formularz kontaktowy  <MdOutlineTextsms color='grey' size={35}/></h1>
          <label>Imię i nazwisko</label>
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label>Adres email</label>
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <label>Numer telefonu</label>
          <input
            type='text'
            name='to_name'
            placeholder='Phone number'
            value={toSend.to_name}
            onChange={handleChange}
          />
          <label>Treść wiadomości</label>
          <textarea
            name="message" 
            onChange={handleChange} 
            value={toSend.message}
            placeholder='Your message...'
            form="usrform">
          </textarea>
          <button type='submit'>Wyślij wiadomość</button>
          
       </motion.form>

        <div className='Footer__links flex ' id="Karier">
          
          {/* <motion.div
              initial={{x:"60%",opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:.9, delay:.5}}
          > 
            <h1 onClick={()=>setToggleWindowReg(true)}>Regulamin</h1>  
            <hr  className='hr-style'/>
          </motion.div> */}
          <motion.div
              initial={{x:"60%",opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:.8, delay:1}}
          >   
            <h1 onClick={()=>setToggleWindowPp(true)}>Polityka prywatności</h1>
            <hr  className='hr-style'/>
          </motion.div>  
          <motion.div
              initial={{x:"60%",opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:.7, delay:1.5}}
          >   
            <h1 onClick={()=>setToggleWindowKarier(true)}>Kariera</h1>
            <hr  className='hr-style'/>
          </motion.div>  
        </div>
        
      </div>
      {toggleWindowReg&&<WindowReg setToggleWindowReg={setToggleWindowReg}/>}
      {toggleWindowKarier&&<WindowKarier setToggleWindowKarier={setToggleWindowKarier}/>}      

      <p>
        <br/><br/><br/><br/>
        <text style={{opacity:".4"}}>Copyright © 2022 INTKOD All rights reserved.</text>
      </p>
    </motion.section>
  )
}