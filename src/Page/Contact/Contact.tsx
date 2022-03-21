import React, {useState} from 'react'
import { send } from 'emailjs-com';
import "./Contact.scss"
export const Contact = () => {
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
    <div className='Contact flex'>
      <div className='Contact__form flex'>
        <h1>Contact Us</h1>

        <div className='Contact__logo'>INT.</div>

        <form className='flex' >{//onSubmit={onSubmit}>
        }
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='to_name'
            placeholder='To name'
            value={toSend.to_name}
            onChange={handleChange}
          />
          <textarea
            name="message" 
            onChange={handleChange} 
            value={toSend.message}
            placeholder='Your message...'
            form="usrform">
          </textarea>
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type='submit'>Send mesage</button>
          
      </form>
     </div>
    </div>
  )
}
