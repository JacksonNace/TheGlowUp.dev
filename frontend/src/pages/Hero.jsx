import React from 'react';
import './Hero.css';
import LettersPullUp from '../components/LettersPullUp';

const Hero = () => {
  return (
    <div className="hero">
      <LettersPullUp text="The Glow Up" delay={0.2} />
      <LettersPullUp text="Glow up. Show up. Code up" delay={0.5} />
    </div>
  );
};

export default Hero;
