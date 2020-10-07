import React from 'react';
import './contact.css';

function ContactComponent() {
  return (
    <div className="contact-content">
        <div className="contact-container">
        <form  action="">
        <div className='sized-box'></div>
        <div className='sized-box'></div>
          <div className="contact-title">Contact Us</div>
          <div className='sized-box'></div>
           <div className='contact-form-title'>Name *</div>
          <div className="name-box">
            <input className="contact-form-text" type="text" placeholder='First Name' />
            <input className="contact-form-text" type="text" placeholder='Last Name'/>
          </div>
          <div className='contact-form-title'>Email *</div>
          <input className="contact-form-text-new-line" type="text" placeholder='Email' />
          <br/>
          <div className='contact-form-title'>Message *</div>
          <textarea className="contact-form-text-new-line" style={{height:"100px", maxLines: 10}} placeholder='Message' > </textarea>
          <div className='sized-box'></div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
}

export default ContactComponent;
