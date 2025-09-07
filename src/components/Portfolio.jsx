

// import React, { useState } from 'react';
// import { FaGraduationCap, FaCertificate, FaCode, FaGlobe, FaTools } from 'react-icons/fa';
// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic would go here
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   // Sample data - replace with your actual information
//   const educationData = [
//     {
//       degree: "Bachelor of Technology in Computer Science",
//       specialization: "Artificial Intelligence",
//       university: "ABC University",
//       year: "2020-2024"
//     }
//   ];

//   const certificationData = [
//     {
//       name: "AWS Certified Solutions Architect",
//       organization: "Amazon Web Services",
//       year: "2023"
//     },
//     {
//       name: "Google Cloud Professional Developer",
//       organization: "Google Cloud",
//       year: "2022"
//     }
//   ];

//   const skillsData = [
//     {
//       category: "Programming",
//       icon: <FaCode className="text-3xl mb-4 text-purple-400" />,
//       skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"]
//     },
//     {
//       category: "Web Technologies",
//       icon: <FaGlobe className="text-3xl mb-4 text-blue-400" />,
//       skills: ["Django", "React", "FastAPI", "Node.js", "Express"]
//     },
//     {
//       category: "Tools & Technologies",
//       icon: <FaTools className="text-3xl mb-4 text-indigo-400" />,
//       skills: ["AWS", "Git", "Docker", "Kubernetes", "Jenkins"]
//     }
//   ];

//   const projectsData = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates and team collaboration features.",
//       tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A responsive weather application that displays current and forecasted weather data for any location.",
//       tech: ["JavaScript", "OpenWeather API", "CSS", "HTML"],
//       github: "#",
//       demo: "#"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-10">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//               Portfolio
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   className={`transition duration-300 ${activeSection === item.toLowerCase() 
//                     ? 'bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent' 
//                     : 'text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'}`}
//                   onClick={() => {
//                     setActiveSection(item.toLowerCase());
//                     document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <div className="md:hidden">
//               {/* Mobile menu button would go here */}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Full Viewport */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-6">
//         <div className="container mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">John Doe</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
//             Aspiring Software Engineer passionate about building scalable applications and exploring AI/ML technologies.
//           </p>
//           <div className="mt-10">
//             <button 
//               className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
//               onClick={() => {
//                 setActiveSection('projects');
//                 document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
//               }}
//             >
//               View My Work
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Section - Full Viewport (Now includes Education) */}
//       <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center text-white">
//             About Me
//           </h2>
          
//           {/* About Me Content */}
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <p className="text-xl text-gray-400">
//               Passionate about technology and innovation, I'm dedicated to creating meaningful software solutions that solve real-world problems.
//             </p>
//           </div>
          
//           {/* Education and Certifications */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Education Column */}
//             <div>
//               <div className="flex items-center justify-center mb-6">
//                 <FaGraduationCap className="text-3xl mr-3 text-purple-400" />
//                 <h3 className="text-2xl font-semibold text-white">Education</h3>
//               </div>
//               <div className="space-y-6">
//                 {educationData.map((edu, index) => (
//                   <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
//                     <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                       {edu.degree}
//                     </h4>
//                     <p className="text-gray-400 mt-2">{edu.specialization}</p>
//                     <p className="text-gray-400">{edu.university}, {edu.year}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Certifications Column */}
//             <div>
//               <div className="flex items-center justify-center mb-6">
//                 <FaCertificate className="text-3xl mr-3 text-blue-400" />
//                 <h3 className="text-2xl font-semibold text-white">Certifications</h3>
//               </div>
//               <div className="space-y-6">
//                 {certificationData.map((cert, index) => (
//                   <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
//                     <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                       {cert.name}
//                     </h4>
//                     <p className="text-gray-400 mt-2">{cert.organization}</p>
//                     <p className="text-gray-400">{cert.year}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section - Full Viewport */}
//       <section id="skills" className="min-h-screen flex items-center justify-center px-6">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center text-white">
//             Skills & Technologies
//           </h2>


//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <p className="text-xl text-gray-400">
//               A comprehensive toolkit for building modern, scalable applications
//             </p>
//           </div>



//           {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {skillsData.map((skillGroup, index) => (
//               <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center">
//                 {skillGroup.icon}
//                 <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                   {skillGroup.category}
//                 </h3>
//                 <div className="flex flex-wrap justify-center gap-3">
//                   {skillGroup.skills.map((skill) => (
//                     <span 
//                       key={skill} 
//                       className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-purple-500/20"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div> */}




//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//   {skillsData.map((skillGroup, index) => (
//     <div
//       key={index}
//       className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center"
//     >
//       {/* Icon and Heading side by side */}
//       <div className="flex gap-4 mb-6">
//         {skillGroup.icon}
//         <h3 className="text-xl font-semibold bg-gradient-to-r text-white bg-clip-text text-transparent">
//           {skillGroup.category}
//         </h3>
//       </div>

//       {/* Skills tags */}
//       <div className="flex flex-wrap justify-center gap-3">
//         {/* {skillGroup.skills.map((skill) => (
//           <span
//             key={skill}
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-purple-500/20"
//           >
//             {skill}
//           </span>
//         ))} */}



//         {skillGroup.skills.map((skill) => (
//         <span 
//           key={skill} 
//           className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-purple-500/10 hover:from-purple-600 hover:to-blue-600 transition-colors duration-200"
//         >
//           {skill}
//         </span>
//       ))}





//       </div>
//     </div>
//   ))}
// </div>






//         </div>
//       </section>

//       {/* Projects Section - Full Viewport */}
//       <section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center text-white">
//             Projects
//           </h2>



//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <p className="text-xl text-gray-400">
//               A showcase of my technical skills and problem-solving abilities
//             </p>
//           </div>



//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {projectsData.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105">
//                 <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="mb-4">
//                   <span className="text-sm text-gray-400">Tech Stack: </span>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {project.tech.map((tech) => (
//                       <span key={tech} className="bg-gradient-to-r from-purple-700 to-blue-700 text-gray-300 px-2 py-1 rounded text-xs">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex space-x-4">
//                   <a href={project.github} className="text-blue-400 hover:text-blue-300 transition duration-300">
//                     GitHub
//                   </a>
//                   <a href={project.demo} className="text-purple-400 hover:text-purple-300 transition duration-300">
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section - Full Viewport */}
//       <section id="contact" className="min-h-screen flex items-center justify-center px-6">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-center text-white">
//             Get In Touch
//           </h2>

//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <p className="text-xl text-gray-400">
//               Have a project in mind or want to collaborate? I'd love to hear from you.
//             </p>
//           </div>


//           <div className="max-w-2xl mx-auto">
//             <form onSubmit={handleFormSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   placeholder='Enter your name'
//                   onChange={handleFormChange}
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   placeholder='Enter your Email'
//                   onChange={handleFormChange}
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   placeholder='Message'
//                   onChange={handleFormChange}
//                   rows="5"
//                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-purple-500/20"
//               >
//                 Send Message
//               </button>
//             </form>
            
//             {/* <div className="mt-12 text-center">
//               <h3 className="text-xl font-semibold mb-6">Or connect with me on</h3>
//               <div className="flex justify-center space-x-6">
//                 <a href="https://github.com" className="text-gray-300 hover:text-purple-400 transition duration-300">
//                   <span className="sr-only">GitHub</span>
//                   <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9极速赛车开奖直播.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.极速赛车开奖直播 253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3极速赛车开奖直播 v-11h3v11zm-1.5-12.268c-.966 0极速赛车开奖直播 -1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.极速赛车开奖直播 75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-300">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div> */}





           

// {/* // In your component render method: */}
// <div className="mt-12 text-center">
//   <h3 className="text-xl font-semibold mb-6">Or connect with me on</h3>
//   <div className="flex justify-center space-x-6">
//     {/* GitHub */}
//     <a 
//       href="https://github.com" 
//       className="bg-purple-600 text-white hover:bg-purple-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
//       aria-label="GitHub"
//     >
//       <FaGithub className="h-6 w-6" />
//     </a>
    
//     {/* LinkedIn */}
//     <a 
//       href="#" 
//       className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
//       aria-label="LinkedIn"
//     >
//       <FaLinkedin className="h-6 w-6" />
//     </a>
    
//     {/* Instagram */}
//     <a 
//       href="#" 
//       className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition duration-300 rounded-full p-3 flex items-center justify-center"
//       aria-label="Instagram"
//     >
//       <FaInstagram className="h-6 w-6" />
//     </a>
//   </div>
// </div>


//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-6 bg-gray-900">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-400">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;























import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate, FaCode, FaGlobe, FaDatabase, FaTools } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Sample data - replace with your actual information
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
    }
  
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
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white mb-4">
            About Me
          </h2>
          
          {/* About Me Content */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-400">
              Passionate about technology and innovation, I'm dedicated to creating meaningful software solutions that solve real-world problems.
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
      <section id="skills" className="min-h-screen flex items-center justify-center px-6">
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
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900">
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
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105">
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
      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
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