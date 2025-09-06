import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const techStack = [
    { category: 'Frontend', icon: <FaCode />, techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React'] },
    { category: 'Backend', icon: <FaServer />, techs: ['Python', 'Flask', 'Django', 'FastAPI', 'Java'] },
    { category: 'Database', icon: <FaDatabase />, techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Associate Engineer at Virtusa with expertise in building 
                scalable web applications and enterprise solutions. Currently working on 
                projects in the <strong>finance and healthcare</strong> domains, I focus on 
                delivering clean, efficient, and maintainable code.
              </p>
              <p>
                My expertise spans Python development, GenAI integration, and web application engineering. 
                I am certified as a PCAP and PCEP Python Programmer, demonstrating 
                my commitment to mastering industry-leading skills.
              </p>

              <p>
                At Virtusa, I collaborate with cross-functional teams to deliver 
                high-quality solutions that meet client requirements and exceed expectations. 
                I'm always eager to take on new challenges and contribute to innovative projects.
              </p>
            </div>

            <div className="tech-stack">
              <h3>Technologies I Work With</h3>
              <div className="tech-categories">
                {techStack.map((category, index) => (
                  <motion.div
                    key={index}
                    className="tech-category"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="category-header">
                      <span className="category-icon">{category.icon}</span>
                      <h4>{category.category}</h4>
                    </div>
                    <div className="tech-list">
                      {category.techs.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;