import React from 'react';
import './contact.css';
import axios from 'axios';

interface contactModel {
  name: string,
  email: string,
  subject: string,
  message: string
}
export default class ContactComponent extends React.Component<contactModel, contactModel>{
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: "Notification - Gracelin Jones Artistry",
      message: ''
    }
  }

  async submitEmail(e: any) {
    e.preventDefault();
    axios.post("http://localhost:3002/api/sendEmail",
    this.state)
    .then(function (response) {
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  resetForm() {
    this.setState({ name: '', email: '', subject: '', message: '' })
  }
  onNameChange(event: any) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event: any) {
    this.setState({ email: event.target.value })
  }
  onMsgChange(event: any) {
    this.setState({ message: event.target.value })
  }
  render() {
    return (
      <div className="contact-content">
        <div className="contact-container">
          <form id='contact-form' onSubmit={this.submitEmail.bind(this)} method='POST'>
            <div className='sized-box'></div>
            <div className='sized-box'></div>
            <div className="contact-title">Contact Us</div>
            <div className='sized-box'></div>
            <div className='contact-form-title'>Name *</div>
            <input id='name' required value={this.state.name} onChange={this.onNameChange.bind(this)} className="contact-form-text-new-line" type="text" placeholder='Name' />           <div className='contact-form-title'>Email *</div>
            <input id='email' type='email' required value={this.state.email} onChange={this.onEmailChange.bind(this)} className="contact-form-text-new-line" placeholder='Email' />
            <br />
            <div className='contact-form-title'>Message *</div>
            <textarea id='message' required value={this.state.message} onChange={this.onMsgChange.bind(this)} className="contact-form-text-new-line" style={{ height: "100px", maxLines: 10 }} placeholder='Message' > </textarea>
            <div className='sized-box'></div>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}