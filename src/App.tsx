import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  ChevronDown,
  Code,
  User,
  Menu,
  X,
  Calendar,
  GraduationCap,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'JavaScript', level: 80, category: 'Programming' },
    { name: 'C/C++', level: 75, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 85, category: 'Frontend' },
    { name: 'SQL', level: 75, category: 'Database' },
    { name: 'TensorFlow', level: 70, category: 'AI/ML' },
    { name: 'Linux', level: 70, category: 'System' }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E)",
      institution: "Mumbai University",
      year: "2025",
      grade: "7.90/10 CGPI",
      status: "Expected"
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Maharashtra State Board",
      year: "2020",
      grade: "64.69%",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Maharashtra State Board", 
      year: "2018",
      grade: "89.90%",
      status: "Completed"
    }
  ];

  const projects = [
    {
      title: "Satellite Image Classification Using Ensembled CNN",
      description: "Developed an ensemble model combining multiple CNN architectures (ResNet, VGG, Inception) to improve classification accuracy of satellite imagery. Extracted spatial and spectral features from high-resolution satellite images to classify various land cover types.",
      technologies: ["Python", "TensorFlow", "ResNet", "VGG", "CNN"],
      image: "dist/Satellite.jpg",
      highlights: ["Higher accuracy than individual models", "Robust ensemble learning approach", "Advanced feature extraction"],
      link: "https://github.com/Misterious0572/Satellite-Image-Processing-using-Ensembled-CNN"
    },
    {
      title: "Online Invoice Generator",
      description: "Designed and developed a web-based application that allows users to create, customize, and download professional invoices easily. Features include client data entry, itemized billing, tax calculations, and PDF export.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["Professional invoice templates", "PDF export functionality", "Responsive user interface"],
      link: "https://github.com/Misterious0572/Online-Invoice-Generator"
    }
  ];

  const personalInfo = {
    dateOfBirth: "16th June 2002",
    address: "At P. Talebazar Dis Devgad",
    nationality: "Indian",
    languages: ["English", "Hindi", "Marathi (Mother Tongue)"],
    hobbies: ["Reading Books", "Playing Chess", "Listening Music"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mayuresh Bhakare
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100 bg-white/95 backdrop-blur-md">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-teal-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-fadeInUp">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    Mayuresh Sunil Bhakare
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Information Technology Engineer
                </p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate about leveraging technology to solve real-world problems. 
                  Specializing in AI/ML, web development, and software engineering with a focus on 
                  continuous learning and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-teal-500 rounded-full p-1 animate-pulse-slow">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden">
                      <img
                        src="dist/Photo.jpg"
                        alt="Mayuresh Bhakare"
                        className="w-full h-full object-cover"
                        />
                      </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce-slow">
                  <Star className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated Information Technology Engineer with a passion for innovation and continuous learning
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Objective</h3>
                <p className="text-gray-700 leading-relaxed">
                  To continuously enhance my knowledge and skills by getting involved in challenging work 
                  environments and utilize them for personal and organizational growth to the best of my ability.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Leadership Quality",
                    "Quick & Avid Learner", 
                    "Problem Solving",
                    "Team Coordination"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-purple-600" size={20} />
                  <span className="text-gray-700">Born: {personalInfo.dateOfBirth}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-600" size={20} />
                  <span className="text-gray-700">{personalInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="text-purple-600" size={20} />
                  <span className="text-gray-700">Nationality: {personalInfo.nationality}</span>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.languages.map((lang, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.hobbies.map((hobby, index) => (
                      <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical expertise across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['Programming', 'Frontend', 'Database', 'AI/ML'].map((category, index) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 && "C/C++, Python, JavaScript"}
                  {index === 1 && "React, HTML, CSS"}
                  {index === 2 && "SQL, MySQL"}
                  {index === 3 && "TensorFlow, CNN, ML"}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{skill.category}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['VS Code', 'MySQL', 'Jupyter Notebook', 'Windows 11', 'Linux', 'TensorFlow', 'React', 'Node.js'].map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Academic journey and achievements
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  
                  <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } md:w-5/12 border-l-4 border-blue-500`}>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-500 text-sm">{edu.year} • {edu.status}</p>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
<section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Showcase of my technical projects and achievements
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] flex flex-col h-full">
            
            {/* Project Image */}
            <div className="relative overflow-hidden h-48 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <ExternalLink size={32} className="text-white" />
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Chips (stick to bottom) */}
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </a>
      ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's connect and discuss opportunities for collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                    <Mail className="text-blue-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">msbhakare5@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow">
                    <Phone className="text-teal-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91-8390704252</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-shadow">
                    <MapPin className="text-purple-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Devgad, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Let's Connect</h4>
                <p className="text-gray-600 mb-4">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in technology and software development.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mayuresh Sunil Bhakare</h3>
            <p className="text-gray-300 mb-6">Information Technology Engineer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:msbhakare5@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+918390704252" className="hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mayuresh-bhakare/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Misterious0572" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Mayuresh Sunil Bhakare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;