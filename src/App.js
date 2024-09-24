import React, { useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const navbar = document.querySelector(".navbar");
        const timelineItems = document.querySelectorAll(".timeline-item");

        // Navbar scroll effect
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        // Timeline items visibility
        timelineItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add("visible");
          } else {
            item.classList.remove("visible");
          }
        });
      }, 100); // Adjust the delay time for performance optimization
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger scroll effect on initial load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar Section */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="container">
          <a href="#about" className="navbar-brand">
            Portfolio Website
          </a>
          <button
            className="navbar-toggle"
            onClick={() => {
              const links = document.querySelector(".navbar-links");
              links.classList.toggle("active"); // Toggle active class to show/hide links
            }}
          >
            <i className="fas fa-bars"></i> {/* Hamburger icon */}
          </button>
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header Section */}

      <header className="bg-primary text-white text-center py-5" id="about">
        <img
          src={`${process.env.PUBLIC_URL}/img/profile.jpg`}
          alt="Profile"
          className="profile-img"
        />
        <h1>Mohammad Shehabul Islam</h1>
        <p>Software Developer</p>
        <a
          href="https://www.linkedin.com/in/mohammad-shehabul-islam-55b7b223a/"
          className="btn btn-light m-2 btn-custom"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/MdShehabulIslam"
          className="btn btn-light m-2 btn-custom"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </header>

      {/* Summary Section */}

      <section className="container my-5" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am a dedicated Computer Science graduate with a solid foundation in
          software development, programming, and database management. Proficient
          in languages such as Java, Python, and JavaScript, I bring practical
          experience in Data Extraction, Web Development, API integration, and
          expertise in technologies including Spring Boot and PostgreSQL. My
          academic and project-based experiences have honed my skills in
          problem-solving, data Analysis, and cross-functional collaboration. I
          am committed to creating efficient, scalable software solutions and
          continuously advancing my technical knowledge. I am currently seeking
          challenging opportunities to contribute my expertise in a dynamic,
          innovative environment focused on growth and excellence.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container my-5" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="row text-center">
          <div className="col-md-4 skill-box">
            <h4>Languages</h4>
            <p>Python, Java, C++, JavaScript</p>
          </div>
          <div className="col-md-4 skill-box">
            <h4>Frameworks</h4>
            <p>React, Next.js, Bootstrap, Spring Boot</p>
          </div>
          <div className="col-md-4 skill-box">
            <h4>Cloud & DevOps</h4>
            <p>AWS Certified, Jenkins, CI/CD, Pytest</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 skill-box">
            <h4>Operating Systems</h4>
            <p>Windows, Linux, Ubuntu</p>
          </div>
          <div className="col-md-6 skill-box">
            <h4>Databases</h4>
            <p>PostgreSQL, MySQL</p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="container my-5" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {/* Graduate Teaching Assistant */}
          <div className="timeline-item left">
            <h4>Graduate Teaching Assistant</h4>
            <p>
              <strong>Memorial University of Newfoundland</strong>
            </p>
            <ul>
              <li>
                Assisted students with complex concepts during lab sessions.
              </li>
              <li>
                Graded assignments and quizzes, and provided invigilation during
                exams.
              </li>
              <li>
                Provided feedback to professors regarding student progress and
                issues during lab sessions.
              </li>
            </ul>
            <i className="fas fa-chalkboard-teacher icon"></i>
          </div>

          {/* Software Developer */}
          <div className="timeline-item right">
            <h4>Software Developer</h4>
            <p>
              <strong>CSIpix</strong>
            </p>
            <ul>
              <li>
                Extracted biometric data using C++ libraries and the MFC
                framework.
              </li>
              <li>
                Handled various file formats like .NIST, .NST, XML for data
                extraction.
              </li>
              <li>
                Enhanced software efficiency by troubleshooting and resolving
                coding issues using Parasoft.
              </li>
            </ul>
            <i className="fas fa-laptop-code icon"></i>
          </div>

          {/* Lecturer */}
          <div className="timeline-item left">
            <h4>Lecturer</h4>
            <p>
              <strong>BRAC University</strong>
            </p>
            <ul>
              <li>
                Delivered lectures on various computer science topics to
                undergraduate students.
              </li>
              <li>
                Provided individualized guidance to help students develop
                effective study strategies.
              </li>
              <li>
                Supervised laboratory sessions and monitored student progress to
                ensure educational goals were met.
              </li>
            </ul>
            <i className="fas fa-book icon"></i>
          </div>

          {/* Data Analyst */}
          <div className="timeline-item right">
            <h4>Data Analyst</h4>
            <p>
              <strong>Uber</strong>
            </p>
            <ul>
              <li>
                Analyzed large datasets using Bliss software to identify trends
                and improve operational efficiency.
              </li>
              <li>
                Created data visualizations and reports using Tableau to inform
                business decisions.
              </li>
              <li>Performed data analysis using SQL and Python.</li>
            </ul>
            <i className="fas fa-chart-line icon"></i>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container my-5" id="education">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <h4>
              M.Sc. in Computer Science{" "}
              <i className="fas fa-graduation-cap icon"></i>
            </h4>
            <p>Memorial University of Newfoundland</p>
            <p>Graduated 2024</p>
          </div>
          <div className="timeline-item right">
            <h4>
              B.Sc. in Computer Science and Engineering{" "}
              <i className="fas fa-graduation-cap icon"></i>
            </h4>
            <p>BRAC University</p>
            <p>Graduated 2021</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section className="container my-5" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects">
          <div className="project shadow-sm">
            <img
              src="https://wallpapercat.com/w/full/8/3/2/2127835-3840x2160-desktop-4k-internet-background.jpg"
              alt="Infinix Broadband Project"
              className="project-image"
            />
            <h4>
              <a href="https://mdshehabulislam.github.io/Infinix-Broadband/">
                Infinix Broadband
              </a>
            </h4>
            <div className="project-buttons">
              <a
                href="https://mdshehabulislam.github.io/Infinix-Broadband/"
                className="btn"
              >
                View Website{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                href="https://github.com/MdShehabulIslam/Infinix-Broadband"
                className="btn"
              >
                GitHub Code
              </a>
            </div>
          </div>
          <div className="project shadow-sm">
            <img
              src="https://d2oe9fogqkc3hl.cloudfront.net/static/illustrations/category-pages/chemistry.png"
              alt="Masters Project: Retrievium"
              className="project-image"
            />
            <h4>
              <a href="https://drive.google.com/drive/folders/1pym7Maufr8WmXFY09FiYRA6xF0yYBj8c">
                Retrievium
              </a>
            </h4>
            <div className="project-buttons">
              <a
                href="https://drive.google.com/drive/folders/1pym7Maufr8WmXFY09FiYRA6xF0yYBj8c"
                className="btn"
              >
                View Website{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1pym7Maufr8WmXFY09FiYRA6xF0yYBj8c"
                className="btn"
              >
                Google Drive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="social-icons">
          <a
            href="https://github.com/MdShehabulIslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 social-icon" // Added class for styling
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-shehabul-islam-55b7b223a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 social-icon" // Added class for styling
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://www.facebook.com/MdSiamIslam97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 social-icon" // Added class for styling
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        </div>
        <p>&copy; Mohammad Shehabul Islam</p>
      </footer>
    </div>
  );
}

export default App;
