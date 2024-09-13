import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <img
          src="../public/images/profile.jpg"
          alt="Profile"
          className="profile-img"
        />
        <h1>Mohammad Shehabul Islam</h1>
        <p>Computer Science Graduate | Software Developer</p>
        <p>📧 mohammadsi@mun.ca | 📞 +1 (709) 687-4395</p>
        <a
          href="https://www.linkedin.com/in/mohammad-shehabul-islam-55b7b223a/"
          className="btn btn-light m-2 btn-custom"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MdShehabulIslam"
          className="btn btn-light m-2 btn-custom"
        >
          GitHub
        </a>
      </header>

      {/* Summary Section */}
      <section className="container my-5">
        <h2 className="section-title">Summary</h2>
        <p className="lead">
          A Computer Science graduate and a software professional with
          experience in both industry and academia. With prior experience
          holding multiple computer science positions across continents, I am
          currently seeking a suitable position to pursue a career in Canada.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container my-5">
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
            <p>PostgreSQL, MySQL, MongoDB</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container my-5">
        <h2 className="section-title">Experience</h2>
        <div className="experience">
          <div className="job shadow-sm">
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
          </div>
          <div className="job shadow-sm">
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
              <li>
                Produced comprehensive technical documentation, including system
                architecture diagrams and user manuals.
              </li>
            </ul>
          </div>
          <div className="job shadow-sm">
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
          </div>
          <div className="job shadow-sm">
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container my-5">
        <h2 className="section-title">Projects</h2>
        <div className="projects">
          <div className="project shadow-sm">
            <h4>
              <a href="https://mdshehabulislam.github.io/Infinix-Broadband/">
                Infinix Broadband Project
              </a>
            </h4>
            <ul>
              <li>
                Developed a fully responsive layout with Bootstrap and custom
                CSS, ensuring an optimal user experience across various devices.
              </li>
              <li>
                Built dynamic user interfaces using React, handled server-side
                logic with Express, and managed the backend with PostgreSQL for
                data handling.
              </li>
              <li>
                Created and integrated RESTful APIs for seamless front-end and
                back-end communication and utilized Git and GitHub for version
                control and collaboration.
              </li>
            </ul>
          </div>
          <div className="project shadow-sm">
            <h4>
              <a href="https://drive.google.com/drive/folders/1pym7Maufr8WmXFY09FiYRA6xF0yYBj8c">
                Masters Project: Retrievium
              </a>
            </h4>

            <ul>
              <li>
                Collaborated on the development of 'Retrievium,' a data-driven
                tool for chemistry.
              </li>
              <li>
                Handled database extraction and created a schema using CSV
                mapping files.
              </li>
              <li>Generated Python scripts to map CSV files with CML files.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container my-5">
        <h2 className="section-title">Education</h2>
        <div className="row">
          <div className="col-md-6 education-box">
            <div className="education-card">
              <h4>Memorial University of Newfoundland</h4>
              <p>
                M.Sc. in Computer Science
                <br />
                Graduated 2024
              </p>
            </div>
          </div>
          <div className="col-md-6 education-box">
            <div className="education-card">
              <h4>BRAC University</h4>
              <p>
                B.Sc. in Computer Science and Engineering
                <br />
                Graduated 2021
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="container my-5">
        <h2 className="section-title">Accomplishments</h2>
        <ul>
          <li>Dean's List Award - BRAC University</li>
          <li>Vice Chancellor's Award - BRAC University</li>
          <li>Performance-Based Scholarship (Top 10%) - BRAC University</li>
          <li>
            Aldrich Multidisciplinary Conference Presenter - Memorial University
            of Newfoundland
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="social-icons">
          <a
            href="https://github.com/MdShehabulIslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-shehabul-islam-55b7b223a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://www.facebook.com/MdSiamIslam97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        </div>
        <p>Mohammad Shehabul Islam</p>
      </footer>
    </div>
  );
}

export default App;
