import './style.css'
import portraitImg from './images/portrait.png'
import etImg from './images/et.png'
import utImg from './images/ut.png'
import gnImg from './images/gn.png'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="header-container">
        <a href="/" class="logo">Dibbo Chakraborty</a>
        <nav class="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </nav>
    </div>
  </header>
  
  <main>
    <section id="hero" class="hero">
      <div class="container hero-container">
        <div class="hero-content">
            <h1>Dibbo Chakraborty</h1>
            <p class="subtitle">Junior Full-Stack Developer (React, Tailwind, Node.js, MongoDB) <br> I build clean, functional web apps with real backends.</p>
            <div class="hero-btns">
                <a href="#work" class="btn primary">View Work</a>
                <a href="#contact" class="btn secondary">Get in Touch</a>
                <a href="https://drive.google.com/file/d/16CpFOOEgUlHbOU65PsnP6-UVOP-MwnoG/view" target="_blank" class="btn secondary">Resume </a>  
            </div>
            <div class="hero-socials">
                <a href="https://github.com/dibbockb" target="_blank" aria-label="GitHub"><i class="ph ph-github-logo"></i></a>
                <a href="https://www.linkedin.com/in/dibbo/" target="_blank" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>
                <a href="https://x.com/dibbockb" target="_blank" aria-label="Twitter"><i class="ph ph-x-logo"></i></a>
            </div>
        </div>
        <div class="hero-image">
            <img src="${portraitImg}" alt="Dibbo Chakraborty" class="hero-portrait " />
        </div>
      </div>
    </section>

    <section id="work" class="section">
      <div class="container">
        <h2 class="section-title">Selected Work</h2>
        <div class="projects-grid">
          <article class="project-card">
            <div class="project-image">
               <img src="${etImg}" alt="EtuitionBD" />
            </div>
            <div class="project-info">
              <h3>EtuitionBD</h3>
              <p>A global role-based platform connecting students with verified tutors.</p>
              <ul class="project-features">
                  <li><i class="ph ph-check-circle"></i> Student/Tutor/Admin dashboards & Firebase Auth</li>
                  <li><i class="ph ph-check-circle"></i> Tuition posting, apps, Stripe payments & revenue</li>
                  <li><i class="ph ph-check-circle"></i> TanStack Query fetching + Chart.js admin stats</li>
              </ul>
              <div class="project-actions">
                  <a href="https://etuition-1e987.web.app/" target="_blank" class="project-link stretched-link">Live Preview <i class="ph ph-arrow-right"></i></a>
                  <a href="https://github.com/dibbockb/etuitionbd" target="_blank" class="project-link">GitHub Repo </a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-image">
               <img src="${utImg}" alt="Utilify" />
            </div>
            <div class="project-info">
              <h3>Utilify</h3>
              <p>Comprehensive bill management system for tracking and paying monthly dues.</p>
              <ul class="project-features">
                  <li><i class="ph ph-check-circle"></i> Restricted payments & dual ৳/USD display</li>
                  <li><i class="ph ph-check-circle"></i> Firebase Auth (Email/Google) + private routes</li>
                  <li><i class="ph ph-check-circle"></i> Interactive carousel & animated category grid</li>
              </ul>
              <div class="project-actions">
                  <a href="https://b12a10-utility-management.web.app/home" target="_blank" class="project-link stretched-link">Live Preview <i class="ph ph-arrow-right"></i></a>
                  <a href="https://github.com/dibbockb/utilify" target="_blank" class="project-link">GitHub Repo </a>
              </div>
            </div>
          </article>
           <article class="project-card">
            <div class="project-image">
               <img src="${gnImg}" alt="Green Nest" />
            </div>
            <div class="project-info">
              <h3>Green Nest</h3>
              <p>A modern plant store e-commerce platform with a clean, soothing UI.</p>
              <ul class="project-features">
                  <li><i class="ph ph-check-circle"></i> Dynamic rating-sorted carousel & JSON fetch</li>
                  <li><i class="ph ph-check-circle"></i> Firebase Auth & protected e-commerce routes</li>
                  <li><i class="ph ph-check-circle"></i> Mobile-first Tailwind design & hero animations</li>
              </ul>
              <div class="project-actions">
                  <a href="https://b12a09-green-nest.web.app" target="_blank" class="project-link stretched-link">Live Preview <i class="ph ph-arrow-right"></i></a>
                  <a href="https://github.com/dibbockb/green-nest-client" target="_blank" class="project-link">GitHub Repo </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h3 class="section-title">About Me</h3>
                <p>I’m a junior full-stack web developer focused on building practical React and Node.js applications.</p>
                <p>I work with authentication, REST APIs, and MongoDB, and I enjoy turning messy requirements into clean, working systems.</p>
                
                <div class="education">
                    <h4>Education</h4>
                    <p>B.A. in English Literature (Ongoing) <br> <span>University of Chittagong</span></p>
                </div>
            </div>
            <div class="skills">
                <h3>Tech Stack</h3>
                <div class="skills-grid">
                    <div class="skill-item" data-tooltip="HTML">
                        <img src="https://skillicons.dev/icons?i=html&theme=dark" alt="HTML5" />
                    </div>
                    <div class="skill-item" data-tooltip="CSS">
                        <img src="https://skillicons.dev/icons?i=css&theme=dark" alt="CSS3" />
                    </div>
                    <div class="skill-item" data-tooltip="Tailwind CSS">
                        <img src="https://skillicons.dev/icons?i=tailwind&theme=dark" alt="Tailwind" />
                    </div>
                    <div class="skill-item" data-tooltip="JavaScript">
                        <img src="https://skillicons.dev/icons?i=js&theme=dark" alt="JavaScript" />
                    </div>
                    <div class="skill-item" data-tooltip="React">
                        <img src="https://skillicons.dev/icons?i=react&theme=dark" alt="React" />
                    </div>
                    <div class="skill-item" data-tooltip="npm">
                        <img src="https://skillicons.dev/icons?i=npm&theme=dark" alt="npm" />
                    </div>
                    <div class="skill-item" data-tooltip="Express">
                        <img src="https://skillicons.dev/icons?i=express&theme=dark" alt="Express" />
                    </div>
                    <div class="skill-item" data-tooltip="MongoDB">
                        <img src="https://skillicons.dev/icons?i=mongodb&theme=dark" alt="MongoDB" />
                    </div>
                    <div class="skill-item" data-tooltip="Figma">
                        <img src="https://skillicons.dev/icons?i=figma&theme=dark" alt="Figma" />
                    </div>
                    <div class="skill-item" data-tooltip="Firebase">
                        <img src="https://skillicons.dev/icons?i=firebase&theme=dark" alt="Firebase" />
                    </div>
                    <div class="skill-item" data-tooltip="Git">
                        <img src="https://skillicons.dev/icons?i=git&theme=dark" alt="Git" />
                    </div>
                    <div class="skill-item" data-tooltip="GitHub">
                        <img src="https://skillicons.dev/icons?i=github&theme=dark" alt="GitHub" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section id="quotes" class="section">
      <div class="container">
        <h2 class="section-title">Favorite Quotes</h2>
        <div class="quotes-grid">
            <a href="https://www.goodreads.com/quotes/4798" target="_blank" class="quote-card">
                <blockquote>"You miss one hundred percent of the shots you don't take."</blockquote>
                <cite>― Wayne Gretzky</cite>
            </a>
            <a href="https://www.goodreads.com/quotes/224637" target="_blank" class="quote-card">
                <blockquote>"Intelligence is not the ability to store information, but to know where to find it."</blockquote>
                <cite>― Albert Einstein</cite>
            </a>
            <a href="https://www.goodreads.com/quotes/19905" target="_blank" class="quote-card">
                <blockquote>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”</blockquote>
                <cite>― Antoine de Saint-Exupéry</cite>
            </a>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container contact-container">
        <h2 class="work-together">Let's Work Together</h2>
        <p class="contact-text">Currently available for freelance projects and open to new opportunities.</p>
        <a href="mailto:divyajitchakraborty@gmail.com" class="email-link">divyajitchakraborty@gmail.com</a>
        
        <footer class="footer">
            <p class="copyright">&copy; 2026 Dibbo Chakraborty. </p>
        </footer>
      </div>
    </section>
  </main>
`

// Scroll Highlight Logic
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observerOptions = {
  root: null,
  threshold: 0.5, // 50% of the section must be visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
