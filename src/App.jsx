import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCode, FiCpu, FiGlobe, FiTool } from "react-icons/fi";

function App() {
  return (
    <div className="bg-[#0f0c29] min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 fixed w-full top-0 z-50 bg-[#0f0c29]/80 backdrop-blur-md border-b border-cyan-500/10">

        <h1 className="text-3xl font-bold text-purple-400">
          Portfolio
        </h1>

        <ul className="hidden md:flex gap-10 text-lg text-gray-300">

          <li className="hover:text-purple-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            Skills
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-purple-400 cursor-pointer transition">
            Contact
          </li>

        </ul>

      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center text-center h-screen px-6 relative">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight z-10"
        >
          Hi, I'm{" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Himoghno
          </span>

        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-4xl font-semibold text-gray-200 mt-6 z-10"
        >
          Passionate About Building Digital Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed z-10"
        >
          Building modern web experiences,
          interactive applications, and continuously learning new technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex gap-6 mt-12 z-10"
        >

          <a
  href="#projects"
  className="bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
>
  View My Work
</a>

          <a
  href="#contact"
  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
>
  Get In Touch
</a>
        </motion.div>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6 }}
  className="flex gap-8 text-4xl text-gray-400 mt-16 z-10"
>

  {/* GitHub */}
  <a
    href="https://github.com/harshit2700qq"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub className="hover:text-purple-400 hover:scale-125 transition duration-300" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/himoghno-ghosh-591936325"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin className="hover:text-purple-400 hover:scale-125 transition duration-300" />
  </a>

  {/* Email */}
  <a
    href="mailto:himoghno.dev@gmail.com"
  >
    <MdEmail className="hover:text-purple-400 hover:scale-125 transition duration-300" />
  </a>

</motion.div>

</section>

      {/* About Section */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="px-6 md:px-16 py-24 bg-[#1a1a40]"
>
  <div className="text-center mb-16">

    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-extrabold"
    >
      About{" "}
      <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Me
      </span>
    </motion.h2>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "7rem" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-1 bg-cyan-400 mx-auto mt-6 rounded-full"
    />
  </div>

  <div className="max-w-6xl mx-auto">

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-300 text-xl leading-relaxed mb-14"
    >
        Hello everyone I'm a B.Tech Computer Science student with a passion for technology and problem solving. I enjoy learning new skills, building projects, and exploring areas like artificial Intelligence, machine learning, and web development. I believe the best way to learn is by creating and experimenting so I spend my time working on projects that help me improve and gain real world experience. My goal is to keep learning grow as a developer and use technology to build useful and impactful solutions.

    </motion.p>

    {/* Info */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex gap-6 text-lg text-gray-300 mb-16 flex-wrap"
    >
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
        India
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
        Available for opportunities
      </div>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.5,
    delay: 0.1,
    type: "spring",
    stiffness: 150,
  }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05, y: -8 }}
  className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition duration-300"
>
  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-purple-400 text-3xl mb-6">
    🧠
  </div>

  <h3 className="text-2xl font-bold mb-3">
    AI & ML Enthusiast
  </h3>

  <p className="text-gray-400 text-lg leading-relaxed">
    Passionate about building intelligent systems using deep learning and machine learning concepts
  </p>
</motion.div>

      {/* Card 2 */}
      <motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.5,
    delay: 0.3,
    type: "spring",
    stiffness: 150,
  }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05, y: -8 }}
  className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition duration-300"
>
  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-purple-400 text-3xl mb-6">
    💻
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Curious Developer
  </h3>

  <p className="text-gray-400 text-lg leading-relaxed">
    Exploring web development, AI, and modern technologies while continuously learning and improving every day
  </p>
</motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 150,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -8 }}
        className="bg-[#24243e] border border-cyan-500/30 rounded-3xl p-8 hover:border-purple-400 transition duration-300"
      >
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-purple-400 text-3xl mb-6">
          🚀
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Always Learning
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          Passionate about learning new technologies, building projects, and growing through real-world experience
        </p>
      </motion.div>

    </div>
  </div>
</motion.section>

{/* Skills Section */}
<section className="px-6 md:px-16 py-24 bg-[#0f0c29]">

  <div className="text-center mb-20">

    <h2 className="text-5xl md:text-6xl font-extrabold">
      Skills &{" "}
      <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Technologies
      </span>
    </h2>

    <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

  </div>

  <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

    {/* Programming Languages */}
    <div className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition">

      <h3 className="text-2xl font-bold text-purple-400 mb-8">
        💻 Programming Languages
      </h3>

      <div className="flex flex-wrap gap-4">

        {["C", "C++", "Python", "HTML"].map((skill) => (
          <span
            key={skill}
            className="bg-slate-700/40 px-5 py-3 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

    {/* AI & ML */}
    <div className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition">

      <h3 className="text-2xl font-bold text-purple-400 mb-8">
        🧠 AI & Machine Learning
      </h3>

      <div className="flex flex-wrap gap-4">

        {[
          "TensorFlow",
          "PyTorch",
          "Scikit-Learn",
          "OpenCV",
          "NLTK",
          "Pandas",
          "NumPy",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-slate-700/40 px-5 py-3 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

    {/* Web Development */}
    <div className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition">

      <h3 className="text-2xl font-bold text-purple-400 mb-8">
        🌐 Web Development
      </h3>

      <div className="flex flex-wrap gap-4">

        {[
          "React",
          "Node.js",
          "FastAPI",
          "MongoDB",
          "Tailwind CSS",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-slate-700/40 px-5 py-3 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

    {/* Tools */}
    <div className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-8 hover:border-purple-400/30 transition">

      <h3 className="text-2xl font-bold text-purple-400 mb-8">
        🛠 Tools & Technologies
      </h3>

      <div className="flex flex-wrap gap-4">

        {[
          "Git",
          "Jupyter",
          "VS Code",
          "Linux",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-slate-700/40 px-5 py-3 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>

  </div>

</section>

{/* Projects Section */}

      {/* Projects Section */}
      <section
  id="projects"
  className="px-6 md:px-16 py-28 bg-[#1a1a40]"
>

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-7xl font-extrabold">

            Featured{" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

          {[
            {
              title: "AI Chatbot",
              desc: "Intelligent AI chatbot capable of generating dynamic responses using NLP concepts.",
              link: "https://github.com/harshit2700qq/ai-chatbot",
            },
            {
              title: "Dynamic Pricing Model",
              desc: "Machine learning model designed to optimize pricing strategies using real-time datasets.",
              link: "https://github.com/harshit2700qq/Dynamic-pricing-model/blob/main/dynamic-pricing.ipynb",
            },
            {
              title: "Sentiment Analysis",
              desc: "NLP-powered sentiment analysis system that classifies text into multiple sentiments.",
              link: "https://github.com/harshit2700qq/Sentiment-analysis",
            },
            {
              title: "Estate Price Variation",
              desc: "Predictive analytics model focused on forecasting estate price fluctuations.",
              link: "https://github.com/harshit2700qq/Estate-price-variation-model",
            },
            {
              title: "Churn Prediction Model",
              desc: "Machine learning model built to predict customer churn and improve retention.",
              link: "https://github.com/harshit2700qq/Churn-model",
            },
          ].map((project) => (

            <div
              key={project.title}
              className="bg-[#24243e] border border-cyan-500/10 rounded-3xl p-10 hover:border-purple-400/30 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center border border-purple-400 text-purple-400 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                View Git Repository
              </a>

            </div>

          ))}

          {/* CKD Featured */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-purple-400 rounded-3xl p-10 shadow-2xl shadow-cyan-500/10">

            <div className="flex justify-between items-center mb-5">

              <h3 className="text-3xl font-bold">
                CKD Predictor
              </h3>

              <span className="bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-bold">
                Featured
              </span>

            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Chronic Kidney Disease prediction system developed using
              machine learning to assist in early diagnosis and healthcare support.
            </p>

            <a
              href="https://github.com/harshit2700qq/CKD-pridictor"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-gradient-to-r from-purple-400 to-blue-500 text-black py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
            >
              View Git Repository
            </a>

          </div>

        </div>

      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="px-6 md:px-16 py-24 bg-[#0f0c29]"
>
  <div className="text-center mb-16">

    <h2 className="text-5xl md:text-6xl font-extrabold">
      Get In{" "}
      <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Touch
      </span>
    </h2>

    <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

    <p className="text-gray-400 mt-8 text-lg">
      Have a project idea? Let's work together.
    </p>

  </div>

  <div className="max-w-4xl mx-auto bg-[#24243e] border border-cyan-500/10 rounded-3xl p-10">

    <form
      action="https://formspree.io/f/xpqewayd"
      method="POST"
      className="space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-[#0f0c29] border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-purple-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-[#0f0c29] border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-purple-400"
        />

      </div>

      <input
        type="text"
        name="subject"
        placeholder="Project Title"
        required
        className="w-full bg-[#0f0c29] border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-purple-400"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Describe the project or work you want me to do..."
        required
        className="w-full bg-[#0f0c29] border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-purple-400"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition duration-300"
      >
        Send Message
      </button>

    </form>

  </div>

</section>
      

    </div>
  );
}



export default App;