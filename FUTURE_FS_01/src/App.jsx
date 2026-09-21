import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          ISHA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-heading">
            HELLO, I'M ISHA 👋
          </p>

          <h1>
            Computer Engineering
            <br />
            <span>Student & Web Developer</span>
          </h1>

          <p className="hero-description">
            B.Tech Computer Engineering student with hands-on experience
            in web development, Android application development,
            frontend technologies, prompt engineering and data handling.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a
              href="/Isha_Kamalia_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              📄 View Resume
            </a>

          </div>

        </div>


        {/* CODE CARD */}
        <div className="hero-card">

          <div className="code-card">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Isha Kamalia",
  role: "Web Developer",
  education: "B.Tech CE",
  cgpa: "8.9",
  university: "UTU",
  passion: "Building"
};`}
            </pre>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <div className="section-title">

          <p>ABOUT ME</p>

          <h2>
            Turning Ideas Into Digital Experiences
          </h2>

        </div>


        <div className="about-content">

          <div className="about-box">

            <h3>
              Who I Am
            </h3>

            <p>
              I am Isha Kamalia, a B.Tech Computer Engineering student
              at UKA TARSADIA University.
            </p>

            <p>
              I have hands-on experience in web development, Android
              application development, frontend technologies,
              prompt engineering and data handling.
            </p>

            <p>
              I enjoy creating responsive user interfaces and
              implementing logical solutions for real-world problems.
            </p>

          </div>


          <div className="about-stats">

            <div className="stat">
              <h3>8.9</h3>
              <p>CGPA</p>
            </div>

            <div className="stat">
              <h3>2027</h3>
              <p>Graduation</p>
            </div>

            <div className="stat">
              <h3>03</h3>
              <p>Major Projects</p>
            </div>

            <div className="stat">
              <h3>01+</h3>
              <p>Internship</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <div className="section-title">

          <p>MY SKILLS</p>

          <h2>
            Technologies I Work With
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">

            <span>01</span>

            <h3>
              Programming
            </h3>

            <p>
              PHP · JavaScript · HTML · CSS
            </p>

          </div>


          <div className="skill-card">

            <span>02</span>

            <h3>
              Frontend
            </h3>

            <p>
              HTML · CSS · JavaScript · UI/UX
            </p>

          </div>


          <div className="skill-card">

            <span>03</span>

            <h3>
              Database
            </h3>

            <p>
              MySQL · MongoDB · Data Mining Tools
            </p>

          </div>


          <div className="skill-card">

            <span>04</span>

            <h3>
              Development Tools
            </h3>

            <p>
              Git · GitHub · VS Code · Android Studio · BLACKBOX AI
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">

        <div className="section-title">

          <p>MY WORK</p>

          <h2>
            Featured Projects
          </h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Destiny AI
            </h3>

            <p>
              An AI-driven platform that provides personalized
              compatibility insights based on user inputs and
              intelligent prompts. The project focuses on dynamic
              input-based analysis and an interactive responsive UI.
            </p>

            <div className="project-tags">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>AI</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/ishakamalih-blip"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Anna on Wheels
            </h3>

            <p>
              An Android food ordering application developed with
              Java, MySQL and Android Studio. It includes menu
              browsing, order tracking, payment workflow and
              database-backed order management.
            </p>

            <div className="project-tags">

              <span>Java</span>
              <span>MySQL</span>
              <span>Android Studio</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/ishakamalih-blip"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              Sugam Citizen Service
            </h3>

            <p>
              A citizen service portal developed during my NIC
              internship for digitalizing the Income Certificate
              process with responsive interfaces, service modules
              and database integration.
            </p>

            <div className="project-tags">

              <span>PHP</span>
              <span>CodeIgniter 4</span>
              <span>MySQL</span>
              <span>Bootstrap</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/ishakamalih-blip"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-title">

          <p>EXPERIENCE</p>

          <h2>
            My Professional Journey
          </h2>

        </div>


        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div>

              <span>
                05/2026 – 07/2026
              </span>

              <h3>
                Web Development Intern
              </h3>

              <h4>
                National Informatics Centre (NIC)
              </h4>

              <p>
                Developed the Sugam Citizen Service Portal using
                PHP (CodeIgniter 4), HTML, CSS, JavaScript,
                Bootstrap and MySQL.
              </p>

              <p>
                Designed responsive and user-friendly web interfaces,
                implemented citizen service modules, worked with
                secure database integration and participated in
                testing, debugging and performance optimization.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div>

              <span>
                2026
              </span>

              <h3>
                Full Stack Web Development Intern
              </h3>

              <h4>
                Future Interns
              </h4>

              <p>
                Working on practical full-stack web development
                projects involving frontend development, backend
                integration, databases, GitHub and real-world
                business workflows.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section className="section">

        <div className="section-title">

          <p>
            CERTIFICATIONS & ACHIEVEMENTS
          </p>

          <h2>
            Learning & Growth
          </h2>

        </div>


        <div className="skills-grid">


          <div className="skill-card">

            <span>01</span>

            <h3>
              AWS Academy
            </h3>

            <p>
              AWS Academy Graduate — Cloud Foundations.
            </p>

          </div>


          <div className="skill-card">

            <span>02</span>

            <h3>
              NIC Internship
            </h3>

            <p>
              Web Development Internship Completion Certificate
              from National Informatics Centre.
            </p>

          </div>


          <div className="skill-card">

            <span>03</span>

            <h3>
              AI Project
            </h3>

            <p>
              Developed an AI-assisted compatibility analysis
              system providing personalized insights.
            </p>

          </div>


          <div className="skill-card">

            <span>04</span>

            <h3>
              Responsive UI
            </h3>

            <p>
              Designed responsive and interactive user interfaces
              focused on user experience.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-title">

          <p>
            GET IN TOUCH
          </p>

          <h2>
            Let's Build Something Together
          </h2>

        </div>


        <div className="contact-box">

          <div>

            <h3>
              Have a project or opportunity?
            </h3>

            <p>
              I am open to internships, collaborations and
              opportunities where I can apply my technical skills
              and continue learning.
            </p>

          </div>


          <div className="contact-links">

            <a href="mailto:ishakamalih@gmail.com">
              📧 Email Me
            </a>

            <a
              href="https://github.com/ishakamalih-blip"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/isha-kamalia-b57030358"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>

            <a
              href="/Isha_Kamalia_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              📄 View Resume
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Isha Kamalia. Designed & Developed with passion.
        </p>

      </footer>

    </div>
  );
}

export default App;