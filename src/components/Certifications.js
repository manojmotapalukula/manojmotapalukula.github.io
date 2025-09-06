import React from 'react';
import { motion } from 'framer-motion';
import {  FaTrophy, FaCertificate } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Associate Python Programmer– PCAP',
      issuer: 'Python Institute',
      date: '2025',
      icon: <FaCertificate />,
      type: 'certification'
    },
    {
      title: 'Certified Entry Level Python Programmer– PCEP',
      issuer: 'Python Institute',
      date: '2025',
      icon: <FaCertificate />,
      type: 'certification'
    },
    {
      title: 'Database Programming with SQL',
      issuer: 'Oracle academy',
      date: '2023',
      icon: <FaCertificate />,
      type: 'certification'
    },
    {
      title: 'Front-end Technologies certification',
      issuer: 'EPAM Systems',
      date: '2023',
      icon: <FaCertificate />,
      type: 'certification'
    }
  ];

  const achievements = [
    {
      title: 'Virtusa Jatayu Season 03 Hackathon Runner-up',
      issuer: 'Virtusa Corporation',
      date: '2023',
      icon: <FaTrophy />,
      type: 'achievement',
      description: 'Secured Runner-Up position in the Virtusa Jatayu Season 03 National level Ideathon, outperforming 5000+ teams from 108+ colleges across India.'
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          
          <div className="cert-grid">
            <div className="cert-section">
              <h3 className="subsection-title">
                <FaCertificate /> Professional Certifications
              </h3>
              <div className="cert-list">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="cert-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="cert-section">
              <h3 className="subsection-title">
                <FaTrophy /> Achievements & Recognition
              </h3>
              <div className="cert-list">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="cert-card achievement-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="cert-icon achievement-icon">{achievement.icon}</div>
                    <div className="cert-content">
                      <h4 className="cert-title">{achievement.title}</h4>
                      <p className="cert-issuer">{achievement.issuer}</p>
                      <p className="achievement-description">{achievement.description}</p>
                      <span className="cert-date">{achievement.date}</span>
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

export default Certifications;