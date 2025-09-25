import React from 'react';
import { motion } from 'framer-motion';

const LettersPullUp = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default LettersPullUp; 