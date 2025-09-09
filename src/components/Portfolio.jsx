import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate, FaCode, FaGlobe, FaDatabase, FaTools } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
//import { MdContactPhone, MdContactMail } from "react-icons/md";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  
  const educationData = [
    {
      degree: "Bachelor of Technology",
      specialization: "Electronics and Communication Engineering",
      university: "GMR Institute of Technology",
      year: "2019 - 2023"
    },
    {
      degree: "Intermediate",
      specialization: "M.P.C",
      university: "Sri Satya Sai Junior College",
      year: "2019"
    },
    {
      degree: "S.S.C",
      specialization: "",
      university: "Vivekananda High School",
      year: "2017"
    },
  
  ];

  const certificationData = [
    {
      name: "Mern Stack Development and Training Program",
      organization: "10000 Coders",
      year: "2025"
    },
    {
      name: "Introduction to Programming using Python",
      organization: "Coursera",
      year: ""
    }
  ];

  const skillsData = [
    {
      category: "Programming",
      icon: <FaCode className="text-3xl text-purple-400" />,
      skills: ["Python", "JavaScript", "SQL"]
    },
    {
      category: "Web Technologies",
      icon: <FaGlobe className="text-3xl text-blue-400" />,
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "Bootstrap"]
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-3xl text-indigo-400" />,
      skills: ["SQL", "Firebase(Authentication)"]
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools className="text-3xl text-indigo-400" />,
      skills: ["Git", "Github", "Postman", "VScode"]
    }
  ];

  const projectsData = [
    {
      title: "Sports Ground Booking System",
      description: "A full-stack web application that enables users to browse, select, and book sports grounds online with real-time slot availability. The system includes secure user authentication, a 7-day booking calendar, and email confirmations for reservations.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      // github: "#",
      // demo: "#"
    },
    {
      title: "Quiz Master - An interactive quiz application",
      description: "Created an interactive quiz application with categorized questions, real-time score tracking, dynamic data handling, and a modern, responsive UI for engaging and seamless learning experiences.",
      tech: ["HTML", "CSS", "Javascript", "Bootstrap", "Firebase"],
      github: "https://github.com/subuddhimounika/Quiz-Master",
      demo: "https://subuddhimounika.github.io/Quiz-Master/"
    },
    {
      title: "Restoran - A responsive restaurant website",
      description: "Developed a responsive restaurant website with interactive UI for browsing menus and placing orders, ensuring smooth navigation and user engagement. Integrated modern web technologies to enhance performance and mobile accessibility.",
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/subuddhimounika/Restoran-Project",
      demo: "https://subuddhimounika.github.io/Restoran-Project/"
    },
    {
      title: "Sign Language Recognition Using Deep Learning Techniques",
      description: "To enable real-time, touchless interaction by recognizing and interpreting hand gestures, with the system displaying the classified gesture as text for accessibility and smart control applications.",
      tech: ["Python", "Mobilenet", "OpenCV", "Tensorflow"],
      
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  className={`transition duration-300 ${activeSection === item.toLowerCase() 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent' 
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Viewport */}
      {/* <section id="home" className="min-h-screen flex items-center justify-center px-6"> */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Subuddhi Mounika</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Aspiring Software Engineer passionate about building scalable and modern web applications while exploring frontend and full-stack development to create seamless user experiences.
          </p>
          <div className="mt-10">
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
              onClick={() => {
                setActiveSection('projects');
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Full Viewport (Now includes Education) */}
      {/* <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900"> */}
      <section id="about" className="py-24 flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white mb-4">
            About Me
          </h2>
          
          {/* About Me Content */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-400">
              {/* Passionate about technology and innovation, I'm dedicated to creating meaningful software solutions that solve real-world problems. */}
              {/* Passionate about web development, I focus on creating scalable applications using modern technologies. I enjoy exploring new frameworks, contributing to projects, and improving my problem-solving skills. Currently, I’m looking for opportunities to work on impactful full-stack projects and collaborate with innovative teams. */}
              Passionate about software development, I focus on creating scalable applications using modern technologies. I enjoy exploring new frameworks, contributing to projects, and improving my problem-solving skills. Currently, I’m looking for opportunities to work on impactful full-stack projects and collaborate with innovative teams.
            </p>
          </div>
          
          {/* Education and Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education Column */}
            <div>
              <div className="flex items-center justify-center mb-6">
                <FaGraduationCap className="text-3xl mr-3 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 mt-2">{edu.specialization}</p>
                    <p className="text-gray-400">{edu.university}, {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Column */}
            <div>
              <div className="flex items-center justify-center mb-6">
                <FaCertificate className="text-3xl mr-3 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certificationData.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 mt-2">{cert.organization}</p>
                    <p className="text-gray-400">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Full Viewport */}
      {/* <section id="skills" className="min-h-screen flex items-center justify-center px-6"> */}
      <section id="skills" className="py-24 flex items-center justify-center px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white mb-4">
            Skills & Technologies
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-400">
              A comprehensive toolkit for building modern and scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {skillGroup.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-gradient-to-r from-purple-700 to-blue-700 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>


                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Full Viewport */}
      {/* <section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900"> */}
      <section id="projects" className="py-24 flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white mb-4">
            Projects
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-xl text-gray-400">
              A showcase of my technical skills and problem-solving abilities
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r text-white bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Tech Stack: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-purple-700 to-blue-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {(project.github || project.demo) && (
                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} className="text-blue-400 hover:text-blue-300 transition duration-300">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="text-purple-400 hover:text-purple-300 transition duration-300">
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section - Full Viewport */}
      {/* <section id="contact" className="min-h-screen flex items-center justify-center px-6"> */}
      <section id="contact" className="py-24 flex items-center justify-center px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white mb-4">
            Get In Touch
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-400">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder='Enter your name'
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder='Enter your Email'
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder='Message'
                  onChange={handleFormChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-purple-500/20"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-12 text-center mt-8">
              <h3 className="text-xl font-semibold mb-6">Or connect with me on</h3>
              <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/subuddhimounika" 
                    className="bg-purple-600 text-white hover:bg-purple-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/subuddhi-mounika/" 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/subuddhimounika/?next=%2F" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                
                  <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=subuddhimounika@gmail.com" 
                  className="bg-green-600 text-white hover:bg-green-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
                
                  {/* <a 
                    href="tel:+1234567890" 
                    className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
                    
                    aria-label="Phone"
                  >
                    <FaPhoneAlt className="h-6 w-6 transform -rotate-5 " />
                  </a> */}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;