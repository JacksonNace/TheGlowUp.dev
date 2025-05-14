import React, { useState } from 'react';
import './Contact.css';
import contactImage from '/contact.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-container">
        <div className="contact-content">
          <motion.div 
            className="contact-image"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Let's Talk!</h2>
            <motion.img 
              src={contactImage} 
              alt="Contact Us"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          <motion.div 
            className="contact-form-container"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
            <motion.p 
              className="contact-subtitle"
              variants={itemVariants}
            >
              You can expect a response within 7 days on Jupiter.
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              variants={containerVariants}
            >
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className="submit-button"
                variants={itemVariants}
              >
                Let's Talk!
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
