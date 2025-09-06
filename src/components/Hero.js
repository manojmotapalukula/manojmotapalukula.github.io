import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Manoj Motapalukula</span>
            </h1>
            <h2 className="hero-subtitle">
              Associate Engineer at <span className="company">Virtusa</span>
            </h2>
            <p className="hero-description">
              I build scalable, clean, and efficient codebases that drive business success
            </p>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              See My Work
            </a>
            <a href="#resume" className="btn btn-outline">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#about">
              <FaArrowDown />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="code-block">
            <div className="code-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">engineer</span> = {'{'}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Manoj Motapalukula'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">'Associate Engineer'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">company</span>: <span className="string">'Virtusa'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Java'</span>, <span className="string">'Python'</span>]
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;