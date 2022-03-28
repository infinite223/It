import React, {useState} from 'react'
import { send } from 'emailjs-com';
import { MdOutlineTextsms } from "react-icons/md"

import "./Footer.scss"

export const Footer = () => {
  
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
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className='Footer flex' id="Footer">
      
      <div className='Footer__contact flex'>   
       <form >{//onSubmit={onSubmit}>
        }    
          <h1>Formularz kontaktowy. <MdOutlineTextsms color='grey' size={35}/></h1>
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
          
       </form>

        <div className='Contact__links flex'>
          <h1>Contact Us</h1>
        </div>

      </div>
      <p>Website Templates created with Website Builder Software.</p>
    </section>
  )
}