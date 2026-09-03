import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "AI Chatbot",
      desc: "Intelligent AI chatbot capable of generating dynamic responses using NLP concepts.",
      link: "https://github.com/harshit2700qq/ai-chatbot",
      icon: "🤖",
    },
    {
      title: "Dynamic Pricing Model",
      desc: "Machine learning model designed to optimize pricing strategies using real-time datasets.",
      link: "https://github.com/harshit2700qq/Dynamic-pricing-model/blob/main/dynamic-pricing.ipynb",
      icon: "📊",
    },
    {
      title: "Sentiment Analysis",
      desc: "NLP-powered sentiment analysis system that classifies text into multiple sentiments.",
      link: "https://github.com/harshit2700qq/Sentiment-analysis",
      icon: "💭",
    },
    {
      title: "Estate Price Variation",
      desc: "Predictive analytics model focused on forecasting estate price fluctuations.",
      link: "https://github.com/harshit2700qq/Estate-price-variation-model",
      icon: "🏠",
    },
    {
      title: "Churn Prediction Model",
      desc: "Machine learning model built to predict customer churn and improve retention.",
      link: "https://github.com/harshit2700qq/Churn-model",
      icon: "📈",
    },
    {
      title: "Eco Nexus",
      desc: "An environmental-focused project designed to explore technology-driven solutions for sustainability and real-world ecological challenges.",
      link: "https://github.com/harshit2700qq/EcoNexus",
      icon: "🌱",
    },
  ];

  const skills = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Python", "HTML"],
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "OpenCV",
        "NLTK",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        "React",
        "Node.js",
        "FastAPI",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Jupyter", "VS Code", "Linux"],
    },
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className={darkMode ? "site dark-theme" : "site light-theme"}>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Himoghno<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle light and dark mode"
          >
            <span>{darkMode ? "☀️" : "🌙"}</span>
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>

          <a href="#contact" className="nav-hire">
            Hire Me
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero section-anchor">

        <div className="hero-background-orb orb-one"></div>
        <div className="hero-background-orb orb-two"></div>

        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >

            <p className="hero-small-title">
              Hi, I'm
            </p>

            <h1>
              Himoghno
              <span>Ghosh</span>
            </h1>

            <h2>
              Computer Science Student
            </h2>

            <p className="hero-description">
              Passionate about technology, artificial intelligence,
              machine learning, and web development. I enjoy learning,
              experimenting, and building projects that solve real-world problems.
            </p>

            <div className="hero-tags">
              <span>AI / ML</span>
              <span>Web Development</span>
              <span>Problem Solving</span>
            </div>

            <div className="hero-buttons">

              <a href="#projects" className="neo-button primary-button">
                View My Work
                <span>→</span>
              </a>

              <a href="#contact" className="neo-button secondary-button">
                Get In Touch
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/harshit2700qq"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-button"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/himoghno-ghosh-591936325"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-button"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:himoghno.dev@gmail.com"
                aria-label="Email"
                className="social-button"
              >
                <MdEmail />
              </a>

            </div>

          </motion.div>


          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-visual"
          >

            <div className="neo-profile">

              <div className="profile-glow"></div>

              <div className="profile-circle">
                <span>HG</span>
              </div>

              <div className="floating-card floating-card-one">
                <span>🧠</span>
                <div>
                  <strong>AI / ML</strong>
                  <small>Learning & Building</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span>💻</span>
                <div>
                  <strong>Developer</strong>
                  <small>Always Learning</small>
                </div>
              </div>

              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section section-anchor">

        <motion.div
          {...cardAnimation}
          className="section-heading"
        >
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="heading-line"></div>
        </motion.div>


        <div className="about-container">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="about-text neo-panel"
          >

            <h3>
              Learning. Building. Improving.
            </h3>

            <p>
              Hello everyone! I'm a B.Tech Computer Science student with
              a passion for technology and problem solving. I enjoy learning
              new skills, building projects, and exploring areas like
              Artificial Intelligence, Machine Learning, and web development.
            </p>

            <p>
              I believe the best way to learn is by creating and experimenting,
              so I spend my time working on projects that help me improve and
              gain real-world experience.
            </p>

            <p>
              My goal is to keep learning, grow as a developer, and use
              technology to build useful and impactful solutions.
            </p>

            <div className="about-info">

              <div>
                <span className="status-dot"></span>
                India
              </div>

              <div>
                <span className="status-dot"></span>
                Available for opportunities
              </div>

            </div>

          </motion.div>


          <div className="about-cards">

            <motion.div
              {...cardAnimation}
              className="neo-card"
            >
              <div className="card-icon">🧠</div>

              <h3>AI & ML Enthusiast</h3>

              <p>
                Exploring machine learning and intelligent systems
                through practical projects and experimentation.
              </p>
            </motion.div>


            <motion.div
              {...cardAnimation}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="neo-card"
            >
              <div className="card-icon">💻</div>

              <h3>Curious Developer</h3>

              <p>
                Exploring web development, modern technologies,
                and new ways of building useful applications.
              </p>
            </motion.div>


            <motion.div
              {...cardAnimation}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="neo-card"
            >
              <div className="card-icon">🚀</div>

              <h3>Always Learning</h3>

              <p>
                Continuously improving my skills through projects,
                experimentation, and real-world experience.
              </p>
            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section alternate-section section-anchor">

        <motion.div
          {...cardAnimation}
          className="section-heading"
        >
          <p className="section-label">WHAT I WORK WITH</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Technologies and tools that I use while learning,
            building projects, and exploring new ideas.
          </p>

        </motion.div>


        <div className="skills-grid">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="skill-card"
            >

              <div className="skill-header">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

              </div>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section section-anchor">

        <motion.div
          {...cardAnimation}
          className="section-heading"
        >

          <p className="section-label">MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Some of the projects I've built while learning,
            experimenting, and improving my development skills.
          </p>

        </motion.div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="project-card"
            >

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  0{index + 1}
                </span>

              </div>

              <h3>{project.title}</h3>

              <p>
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Git Repository
                <span>↗</span>
              </a>

            </motion.div>

          ))}


          {/* CKD FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="featured-project"
          >

            <div className="featured-top">

              <div className="project-icon featured-icon">
                🩺
              </div>

              <span className="featured-badge">
                Featured
              </span>

            </div>

            <h3>
              CKD Predictor
            </h3>

            <p>
              Chronic Kidney Disease prediction system developed using
              machine learning to assist in early diagnosis and
              healthcare support.
            </p>

            <a
              href="https://github.com/harshit2700qq/CKD-predictor"
              target="_blank"
              rel="noreferrer"
              className="featured-button"
            >
              View Git Repository
              <span>↗</span>
            </a>

          </motion.div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="section alternate-section">

        <motion.div
          {...cardAnimation}
          className="section-heading"
        >

          <p className="section-label">MY JOURNEY</p>

          <h2>
            Learning & <span>Experience</span>
          </h2>

          <div className="heading-line"></div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="experience-card"
        >

          <div className="experience-header">

            <div>
              <span className="experience-label">
                PROJECT EXPERIENCE
              </span>

              <h3>
                Machine Learning & Development Projects
              </h3>
            </div>

            <span className="experience-date">
              2024 — Present
            </span>

          </div>


          <div className="experience-content">

            <div>
              <span>01</span>
              <p>
                Developed machine learning projects including CKD
                Prediction, Churn Prediction, Sentiment Analysis,
                Dynamic Pricing Model, and AI Chatbot.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Built intelligent applications using Python,
                Machine Learning, and data analysis techniques.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Worked with real-world datasets for prediction,
                classification, and business analytics tasks.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Created responsive web applications and explored
                modern frontend technologies.
              </p>
            </div>

            <div>
              <span>05</span>
              <p>
                Continuously learning AI, Machine Learning,
                Web Development, and software engineering practices.
              </p>
            </div>

          </div>

        </motion.div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section section-anchor">

        <motion.div
          {...cardAnimation}
          className="section-heading"
        >

          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Have a project idea or something you'd like to build?
            Feel free to get in touch.
          </p>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="contact-panel"
        >

          <div className="contact-intro">

            <div className="contact-icon">
              ✉️
            </div>

            <h3>
              Let's build something useful.
            </h3>

            <p>
              Tell me a little about yourself and the work
              you'd like to discuss.
            </p>

            <div className="contact-direct">

              <a href="mailto:himoghno.dev@gmail.com">
                <MdEmail />
                himoghno.dev@gmail.com
              </a>

            </div>

          </div>


          <form
            action="https://formspree.io/f/xpqewayd"
            method="POST"
            className="contact-form"
          >

            <div className="form-row">

              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label>Project Title</label>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to build?"
                required
              />

            </div>


            <div className="form-group">

              <label>Project Details</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project or the work you need..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="neo-button primary-button submit-button"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </motion.div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div>
          <strong>
            Himoghno<span>.</span>
          </strong>

          <p>
            Learning, building, and growing through technology.
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/harshit2700qq"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/himoghno-ghosh-591936325"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:himoghno.dev@gmail.com">
            <MdEmail />
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;