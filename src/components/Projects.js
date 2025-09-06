import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'VirtualBank– Digital Banking System',
      description: 'Built a full-stack digital banking app with features like account management, fund transfers, deposits, and loans. Secured the system with OTP, authentication, session handling, and password reset. Added modules for card management, transaction filtering with CSV export, RD/FD handling, and nominee management.',
      technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
      github: '#',
      demo: '#',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/037/747/350/small_2x/3d-rendering-glass-wall-of-a-bank-building-against-sky-background-photo.jpg'
    },
    {
      title: 'AI/ML models to predict fraud Health Insurance claims',
      description: 'Developed a web application using HTML, CSS, Bootstrap, and JavaScript, demonstrating skills in front-end development and responsive design. Built a machine learning model to detect health insurance fraud, achieving high accuracy and significantly reducing false positives, leading to cost savings and improved efficiency in claim processing.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask', 'Machine Learning'],
      github: '#',
      demo: '#',
      image: 'https://medicaldialogues.in/h-upload/2023/05/18/209949-health-insurance.jpg'
    },
    {
      title: 'Healthcare Management System',
      description: 'Enterprise healthcare application for patient management, appointment scheduling, and medical records. Built with Python Django.',
      technologies: ['Python', 'Django', 'SQlite', 'HTML', 'CSS', 'JavaScript', 'Docker', 'Git and GitHub.',],
      github: '#',
      demo: '#',
      image: 'https://tse1.mm.bing.net/th/id/OIP.M43am8fEkgGDct75ZKgVhQHaFi?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <FaGithub />
                      </a>
                      <a href={project.demo} className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="projects-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>Want to see more of my work?</p>
            <a href="https://github.com" className="btn btn-outline">
              <FaCode /> View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;