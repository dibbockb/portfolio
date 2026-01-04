import './style.css'

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
            <h1>Building digital <br> <span class="accent">experiences</span> that matter.</h1>
            <p class="subtitle">Dibbo Chakraborty | Minimalist Front-End Developer & UI Designer. crafting polished, high-performance web interfaces.</p>
            <div class="hero-btns">
                <a href="#work" class="btn primary">View Work</a>
                <a href="#contact" class="btn secondary">Get in Touch</a>
                <a href="https://github.com/dibbockb" target="_blank" class="btn outline">Download Resume <i class="ph ph-download-simple"></i></a>
            </div>
            <div class="hero-socials">
                <a href="https://github.com/dibbockb" target="_blank" aria-label="GitHub"><i class="ph ph-github-logo"></i></a>
                <a href="https://www.linkedin.com/in/dibbo/" target="_blank" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>
                <a href="https://x.com/dibbockb" target="_blank" aria-label="Twitter"><i class="ph ph-x-logo"></i></a>
            </div>
        </div>
        <div class="hero-image">
            <img src="images/portrait.png" alt="Dibbo Chakraborty" class="hero-portrait " />
        </div>
      </div>
    </section>

    <section id="work" class="section">
      <div class="container">
        <h2 class="section-title">Selected Work</h2>
        <div class="projects-grid">
          <article class="project-card">
            <div class="project-image">
               <a href="https://etuition-1e987.web.app/" target="_blank">
                 <img src="images/et.png" alt="EtuitionBD" />
               </a>
            </div>
            <div class="project-info">
              <h3>EtuitionBD</h3>
              <p>A global platform connecting students with verified tutors. Built with React, Firebase, and a robust backend API.</p>
              <div class="project-actions">
                  <a href="https://etuition-1e987.web.app/" target="_blank" class="project-link">Live Preview <i class="ph ph-arrow-right"></i></a>
                  <a href="https://github.com/dibbockb/etuitionbd" target="_blank" class="project-link">GitHub Repo </a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-image">
               <a href="https://b12a10-utility-management.web.app/home" target="_blank">
                 <img src="images/ut.png" alt="Utilify" />
               </a>
            </div>
            <div class="project-info">
              <h3>Utilify</h3>
              <p>A comprehensive bill management system for tracking and paying monthly dues. Efficient and user-friendly.</p>
              <div class="project-actions">
                  <a href="https://b12a10-utility-management.web.app/home" target="_blank" class="project-link">Live Preview <i class="ph ph-arrow-right"></i></a>
                  <a href="https://github.com/dibbockb/utilify" target="_blank" class="project-link">GitHub Repo </a>
              </div>
            </div>
          </article>
           <article class="project-card">
            <div class="project-image">
               <a href="https://b12a09-green-nest.web.app" target="_blank">
                 <img src="images/gn.png" alt="Green Nest" />
               </a>
            </div>
            <div class="project-info">
              <h3>Green Nest</h3>
              <p>A modern plant store e-commerce platform built with React and Tailwind CSS. Features a clean, soothing UI.</p>
              <div class="project-actions">
                  <a href="https://b12a09-green-nest.web.app" target="_blank" class="project-link">Live Preview <i class="ph ph-arrow-right"></i></a>
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
                <p>I focus on the intersection of design and engineering. With a strong foundation in modern web technologies and a keen eye for detail, I build products that are not only functional but also delightful to use.</p>
                <p>My approach is simple: clean code, minimalist design, and user-centric thinking.</p>
            </div>
            <div class="skills">
                <h3>Tech Stack</h3>
                <div class="skills-grid">
                    <div class="skill-item" data-tooltip="HTML5">
                        <img src="https://skillicons.dev/icons?i=html&theme=dark" alt="HTML5" />
                    </div>
                    <div class="skill-item" data-tooltip="CSS3">
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
                    <div class="skill-item" data-tooltip="Node.js">
                        <img src="https://skillicons.dev/icons?i=nodejs&theme=dark" alt="Node.js" />
                    </div>
                    <div class="skill-item" data-tooltip="Figma">
                        <img src="https://skillicons.dev/icons?i=figma&theme=dark" alt="Figma" />
                    </div>
                    <div class="skill-item" data-tooltip="Express">
                        <img src="https://skillicons.dev/icons?i=express&theme=dark" alt="Express" />
                    </div>
                    <div class="skill-item" data-tooltip="MongoDB">
                        <img src="https://skillicons.dev/icons?i=mongodb&theme=dark" alt="MongoDB" />
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
            <a href="https://www.goodreads.com/quotes/41383" target="_blank" class="quote-card">
                <blockquote>"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying."</blockquote>
                <cite>- Arthur C. Clarke</cite>
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
