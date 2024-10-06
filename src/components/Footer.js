import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_0dw8b1a',  // Replac with your EmailJS Service ID
      'template_05vwe4e', // Replace with your EmailJS Template ID
      formData,
      'CwAd2DSMeeuJcaq4W'      // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log(result.text);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });  // Reset form
    })
    .catch((error) => {
      console.log(error.text);
      setFormStatus('Failed to send the message. Please try again.');
    });
  };

  return (
    <footer className="footer" id="contact">
      <p>Contact me at: <a href="mailto:aarthic.ug22.cs@francisxavier.ac.in">aarthic.ug22.cs@francisxavier.ac.in</a></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>

      <ul className="social-links">
        <li><a href="https://linkedin.com">LinkedIn</a></li>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
