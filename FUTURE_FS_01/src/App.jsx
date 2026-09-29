import React from "react";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vite",
  "Node.js",
  "Express.js",
  "PHP",
  "CodeIgniter",
  "MySQL",
  "MongoDB",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website designed to showcase my skills, projects and professional journey.",
    technologies: ["React", "Vite", "CSS"],
  },
  {
    number: "02",
    title: "Full Stack Web Application",
    description:
      "A responsive web application built with modern frontend and backend technologies with a focus on usability and clean design.",
    technologies: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    number: "03",
    title: "Citizen Service System",
    description:
      "A digital citizen service platform developed during my internship to simplify online certificate application and processing.",
    technologies: ["PHP", "CodeIgniter", "MySQL"],
  },
];

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailBody = `
Hello Isha,

Name: ${name}
Email: ${email}

Message:
${message}
`;

    window.location.href =
      `mailto:ishakamalih@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo">
          <span>✦</span> ISHA
        </a>

        <nav className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>

      </header>


      {/* ================= HERO ================= */}

      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">

              <span className="line"></span>

              HELLO, I'M

            </div>


            <h1>

              Isha

              <span>Kamalia</span>

            </h1>


            <h2>
              Full Stack Web Developer
            </h2>


            <p className="hero-description">

              B.Tech Computer Engineering student passionate about
              creating modern, responsive and user-friendly web
              applications with clean design and meaningful
              functionality.

            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <span>↗</span>
              </a>


              <a
                href="#contact"
                className="outline-button"
              >
                Contact Me
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="social-links">

              <a
                href="https://github.com/ishakamalih-blip"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/isha-kamalia-b57030358"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>


              <a href="mailto:ishakamalih@gmail.com">
                Email
              </a>

            </div>

          </div>


          {/* ================= PROFILE ================= */}

          <div className="hero-visual">

            <div className="shape shape-one"></div>

            <div className="shape shape-two"></div>

            <div className="shape shape-three"></div>


            <div className="profile-card">

              <div className="profile-image-wrapper">

                <img
                  src="/profile.jpg"
                  alt="Isha Kamalia"
                  className="profile-photo"
                />

              </div>

            </div>


            <div className="floating-star star-one">
              ✦
            </div>


            <div className="floating-star star-two">
              ✦
            </div>


            <div className="quote-card">

              <span>Dream</span>

              <span>Build</span>

              <span>Grow ♡</span>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">

            <span className="section-number">
              01
            </span>


            <div>

              <p className="section-label">
                ABOUT ME
              </p>


              <h2>

                Turning Ideas Into

                <span>
                  {" "}Digital Experiences
                </span>

              </h2>

            </div>

          </div>


          <div className="about-grid">

            <div className="about-main">

              <p className="large-text">

                I am a Computer Engineering student with
                a strong interest in Full Stack Development,
                modern UI design and innovative technologies.

              </p>


              <p>

                I enjoy transforming ideas into responsive,
                interactive and meaningful digital experiences.
                I am continuously learning new technologies
                and improving my development skills through
                projects, internships and hands-on experiences.

              </p>

            </div>


            <div className="about-box">

              <div className="about-box-icon">
                ✦
              </div>


              <h3>

                Curious by Nature.

                <br />

                Creative by Design.

              </h3>


              <p>

                Always learning. Always building.

              </p>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">

            <span className="section-number">
              02
            </span>


            <div>

              <p className="section-label">
                MY SKILLS
              </p>


              <h2>

                Technologies I

                <span>
                  {" "}Work With
                </span>

              </h2>

            </div>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={skill}
              >

                <span className="skill-index">

                  {String(index + 1).padStart(2, "0")}

                </span>


                <span className="skill-name">

                  {skill}

                </span>


                <span className="skill-arrow">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="projects-heading">

            <div className="section-heading">

              <span className="section-number">
                03
              </span>


              <div>

                <p className="section-label">
                  MY WORK
                </p>


                <h2>

                  Featured

                  <span>
                    {" "}Projects
                  </span>

                </h2>

              </div>

            </div>


            <p className="project-intro">

              Real solutions.

              <br />

              Practical skills.

              <br />

              Built with passion.

            </p>

          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>


                  <span className="project-symbol">
                    ↗
                  </span>

                </div>


                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="tags">

                    {project.technologies.map(
                      (tech) => (

                        <span key={tech}>
                          {tech}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-heading">

            <span className="section-number">
              04
            </span>


            <div>

              <p className="section-label">
                GET IN TOUCH
              </p>


              <h2>

                Let's Work

                <span>
                  {" "}Together
                </span>

              </h2>

            </div>

          </div>


          <div className="contact-grid">


            {/* CONTACT INFORMATION */}

            <div className="contact-info">

              <p className="contact-big-text">

                Have a project idea,
                internship opportunity
                or just want to connect?

              </p>


              <p>

                I'd love to hear from you.
                Send me a message and let's
                create something meaningful
                together.

              </p>


              <div className="contact-details">

                <a href="mailto:ishakamalih@gmail.com">

                  <span>
                    EMAIL
                  </span>

                  ishakamalih@gmail.com

                </a>


                <a
                  href="https://github.com/ishakamalih-blip"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span>
                    GITHUB
                  </span>

                  github.com/ishakamalih-blip

                </a>


                <a
                  href="https://www.linkedin.com/in/isha-kamalia-b57030358"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span>
                    LINKEDIN
                  </span>

                  linkedin.com/in/isha-kamalia-b57030358

                </a>

              </div>

            </div>


            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="input-row">

                <div className="input-group">

                  <label>
                    Your Name
                  </label>


                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="input-group">

                  <label>
                    Your Email
                  </label>


                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              <div className="input-group">

                <label>
                  Subject
                </label>


                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>


              <div className="input-group">

                <label>
                  Your Message
                </label>


                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="6"
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="send-button"
              >

                Send Message

                <span>
                  ↗
                </span>

              </button>

            </form>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">

          <span>✦</span> ISHA.

        </div>


        <p>

          © 2026 Isha Kamalia.
          Built with React & Vite.

        </p>


        <a href="#home">

          Back to top ↑

        </a>

      </footer>

    </div>
  );
}

export default App;