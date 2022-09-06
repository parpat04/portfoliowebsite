import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6miu5uf', 'template_kf7skqi', form.current, 'cO5gQ_fCwYjyucb6Z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='form-vertical'>
        <div className='form-horizontal'>
          <input type="name" required name="user_name" placeholder='Your Name*' className='form-contact' style={{width: '29rem', height: '3rem'}}/>
          <input type="email"  required name="user_email" placeholder='Your Email*' className='form-contact' style={{width: '29rem', height: '3rem'}}/>
        </div>
        <input type="subject" required name="user_subject" placeholder='Subject*' className='form-contact' />
        <textarea name="message" required className='form-message' placeholder='Message*'/>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

export default Contact