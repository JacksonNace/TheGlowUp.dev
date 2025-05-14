import React from 'react';
import './WhatIsThis.css'; // make sure to import your CSS if it's external
import aboutImage from '/about.png'; // make sure this path is correct
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhatIsThis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section className="Summary" ref={ref}>
      <div className="Sum">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
        <h1>What is this?</h1>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants}>
            TheGlowUp.Dev is a blog-meets-platform created by us to help early-career techies glow up professionally. Whether you're a college student, self-taught coder, or just breaking into tech, we're here to make your journey smoother with approachable guides, real advice, and a sprinkle of fun.
          </motion.p>
          <motion.p variants={itemVariants}>
            We cover everything from debugging in React and building your first portfolio to writing a clean résumé or surviving your first internship. At the end of each article, you can take a short quiz to test your knowledge and earn a badge — because who doesn't love a little gamified learning?
          </motion.p>
          <motion.p variants={itemVariants}>
            We're not experts. We're just a couple who figured some things out and want to pass it on.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
        <img src={aboutImage} alt="About us illustration" className="about-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsThis;
