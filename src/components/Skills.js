import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava,  FaDatabase, FaGitAlt, FaDocker, FaAws, FaPython, FaFlask, FaBootstrap, FaProjectDiagram } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiJenkins, SiPostman, SiSqlite, SiDjango, SiJavascript } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript/>, level: 80 },
        { name: 'C Programming', icon: <FaProjectDiagram/>, level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact />, level: 88 },
        { name: 'Flask', icon: <FaFlask />, level: 85 },
        { name: 'Django', icon: <SiDjango />, level: 78 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 82 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <FaDatabase />, level: 85 },
        { name: 'SQLite', icon: <SiSqlite />, level: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 75 },
        { name: 'Jenkins', icon: <SiJenkins />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 65 },
        { name: 'Postman', icon: <SiPostman />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;