// components/Contact.jsx
import { useState, useRef } from 'react';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import twitterIcon from '../assets/twitter-icon.png';

emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current)
      .then((result) => {
        console.log('Message sent:', result.text);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      }, (error) => {
        console.log('Failed to send message:', error.text);
      });
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-details">
              <h3>Location</h3>
              <p>Chennai, Tamilnadu</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-details">
              <h3>Email</h3>
              <p>jayasuryar849@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+91 93617 57397</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/jayasurya0007" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={githubIcon} alt="GitHub" className="social-icon-img" />
              </a>
              <a href="https://linkedin.com/in/jayasurya-rajaraman-2674a9253/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
              </a>
              <a href="https://x.com/jayasurya_0007" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={twitterIcon} alt="Twitter" className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {formSubmitted && (
            <div className="form-success-message">
              Your message has been sent successfully!
            </div>
          )}
          
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;