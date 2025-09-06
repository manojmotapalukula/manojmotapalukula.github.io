import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const experience = [
    {
      title: 'Associate Engineer',
      company: 'Virtusa Corporation',
      period: '2025 - Present',
      description: 'Developing enterprise applications using Java, Spring Boot, and React. Working on healthcare and finance domain projects.',
      achievements: [
        'Led development of patient management system serving 10,000+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored 3 junior developers and conducted code reviews'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Institute of Aeronautical Engineering',
      period: '2020 - 2024',
      grade: 'CGPA: 8.64/10',
      highlights: [
        'Specialized in Software Engineering and Web Technologies',
        'Final year project on Machine Learning applications',
        'Active member of Programming Club'
      ]
    }
  ];

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Resume</h2>
          
          <div className="resume-header">
            <div className="resume-summary">
              <h3>Professional Summary</h3>
              <p>
                Passionate Associate Engineer with 2+ years of experience in full-stack development. 
                Proven track record of delivering scalable web applications and working effectively 
                in agile environments. Strong expertise in Java, React, and modern development practices.
              </p>
            </div>
            
            <div className="resume-actions">
              <a href="/Manoj_Motapalukula_Resume_.pdf" className="btn btn-primary" download>
                <FaDownload /> Download Resume
              </a>
              <a href="/Manoj_Motapalukula_Resume_.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaEye /> View Online
              </a>
            </div>
          </div>

          <div className="resume-content">
            <div className="resume-section">
              <h3 className="resume-section-title">
                <FaBriefcase /> Professional Experience
              </h3>
              
              <div className="timeline">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{exp.title}</h4>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <p className="timeline-company">{exp.company}</p>
                      <p className="timeline-description">{exp.description}</p>
                      <ul className="timeline-achievements">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="resume-section">
              <h3 className="resume-section-title">
                <FaGraduationCap /> Education
              </h3>
              
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{edu.degree}</h4>
                        <span className="timeline-period">{edu.period}</span>
                      </div>
                      <p className="timeline-company">{edu.institution}</p>
                      <p className="timeline-grade">{edu.grade}</p>
                      <ul className="timeline-achievements">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex}>{highlight}</li>
                        ))}
                      </ul>
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

export default Resume;