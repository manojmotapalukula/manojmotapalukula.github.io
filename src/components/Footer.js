import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/manoj-motapalukula/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/manojmotapalukula/',
      label: 'GitHub'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:manojmotapalukula@gmail.com.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              Always interested in new opportunities and exciting projects. 
              Let's connect and create something great!
            </p>
          </div>

          <div className="footer-links">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Manoj Motapalukula.
            </p>
          </div>
          
          <div className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;