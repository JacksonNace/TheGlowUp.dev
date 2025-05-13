import React, { useState } from 'react';
import './QnA.css';
import monkeyImg from '/qna.png'; // Replace with your actual image path

const faqs = [
  { question: 'Who is this for?', answer: 'Anyone in the early stages of their tech journey — students, career switchers, or anyone feeling a little lost trying to break into the field.' },
  { question: 'Are the articles beginner-friendly?', answer: 'Absolutely! We assume you\'re smart but not necessarily experienced. No gatekeeping, just clear, friendly guidance.' },
  { question: 'What\'s up with the quizzes and badges?', answer: 'At the end of most posts, you can take a quick quiz to lock in what you\'ve learned. Score well? You earn a digital badge for fun and bragging rights.' },
  { question: 'Why did you make this?', answer: 'We\'ve both been through the confusion and pressure of trying to break into tech. This is the resource we wish we had when we were starting.' },
  { question: 'Can I suggest a topic?', answer: 'Yes, please! We love feedback and ideas. Reach out through our contact form or comment on a post.' },
  { question: 'Is this free?', answer: 'Yup. 100% free and passion-powered.' },
];

const QnASection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="qna-container">
      <div className="qna-image">
        <img src={monkeyImg} alt="Monkey eating banana" />
      </div>
      <div className="qna-content">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`qna-block ${openIndex === index ? 'active' : ''}`}>
            <div className="qna-question" onClick={() => toggleIndex(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '×' : '+'}</span>
            </div>
            <p className="qna-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnASection;
