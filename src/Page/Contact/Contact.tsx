import React, {useState} from 'react'
import { send } from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai"
import { RiFacebookCircleFill } from "react-icons/ri"
import "./Contact.scss"
export const Contact = () => {
  let navigate = useNavigate(); 
  
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
        
        <div className='Contact__help flex'>
          <h3>Contact Us</h3>
          <p>email: ..........@gmail.com</p>
          <div className='flex' style={{display:"flex", marginTop:"40px"}}>
            <div className='Contact__help-number flex'>
              <RiFacebookCircleFill size={25} style={{marginRight:"7px"}}/> facebook
            </div>
            <div className='Contact__help-number flex'>
              <AiOutlinePhone size={20} style={{marginRight:"7px"}}/> 893 324 321
            </div>
          </div>
        </div>

        <form className='flex' >{//onSubmit={onSubmit}>
        }
          <div className='Contact__logo' onClick={()=> navigate("/")}>INT.</div>
          
          <h3>Send us a message</h3>

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
