import React, { useState } from 'react';
import './QnA.css';
import monkeyImg from '/qna.png'; // Replace with your actual image path
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  { question: 'Who is this for?', answer: 'Anyone in the early stages of their tech journey — students, career switchers, or anyone feeling a little lost trying to break into the field.' },
  { question: 'Are the articles beginner-friendly?', answer: 'Absolutely! We assume you\'re smart but not necessarily experienced. No gatekeeping, just clear, friendly guidance.' },
  { question: 'What\'s up with the quizzes and badges?', answer: 'At the end of most posts, you can take a quick quiz to lock in what you\'ve learned. Score well? You earn a digital badge for fun and bragging rights.' },
  { question: 'Why did you make this?', answer: 'We\'ve both been through the confusion and pressure of trying to break into tech. This is the resource we wish we had when we were starting.' },
  { question: 'Can I suggest a topic?', answer: 'Yes, please! We love feedback and ideas. Reach out through our contact form or comment on a post.' },
  { question: 'Is this free?', answer: 'Yup. 100% free and passion-powered.' },
];

const QnA = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section className="qna-container" ref={ref}>
      <motion.div 
        className="qna-image-desktop"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <img src={monkeyImg} alt="Monkey eating banana" />
      </motion.div>
      <div className="qna-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Frequently Asked Questions</h2>
        </motion.div>
        <motion.div 
          className="qna-image-mobile"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={monkeyImg} alt="Monkey eating banana" />
        </motion.div>
        <motion.div 
          className="qna-questions"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`qna-block ${openIndex === index ? 'active' : ''}`}
              variants={itemVariants}
            >
              <div className="qna-question" onClick={() => toggleIndex(index)}>
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? '×' : '+'}</span>
              </div>
              <p className="qna-answer">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QnA;
