import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <div className="logo">My Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="text-center py-20">
        <img src="path/to/your/image.jpg" alt="Professional" className="mx-auto rounded-full w-32 h-32" />
        <h1 className="text-4xl font-bold mt-4">Lauren Herbert</h1>
        <p className="text-xl mt-2">AI Engineer</p>
        <p className="text-lg mt-2">Building cutting-edge AI solutions to enhance software development</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View My Work</button>
      </section>

      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-center">A brief personal bio that includes your background, key experiences, and passions. Consider adding a fun fact or hobbies section to make it more relatable and personal.</p>
      </section>

      <section id="portfolio" className="py-20">
        <h2 className="text-3xl font-bold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="portfolio-item">
            <img src="path/to/project1.jpg" alt="Project 1" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Project 1</h3>
            <p className="mt-2">A brief description of Project 1 and the technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src="path/to/project2.jpg" alt="Project 2" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Project 2</h3>
            <p className="mt-2">A brief description of Project 2 and the technologies used.</p>
          </div>
          <div className="portfolio-item">
            <img src="path/to/project3.jpg" alt="Project 3" className="w-full" />
            <h3 className="text-xl font-bold mt-2">Project 3</h3>
            <p className="mt-2">A brief description of Project 3 and the technologies used.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="flex justify-center mt-4">
          <div className="skill-item mx-4">
            <img src="path/to/skill1.png" alt="Skill 1" className="w-16 h-16" />
            <p className="mt-2 text-center">Skill 1</p>
          </div>
          <div className="skill-item mx-4">
            <img src="path/to/skill2.png" alt="Skill 2" className="w-16 h-16" />
            <p className="mt-2 text-center">Skill 2</p>
          </div>
          <div className="skill-item mx-4">
            <img src="path/to/skill3.png" alt="Skill 3" className="w-16 h-16" />
            <p className="mt-2 text-center">Skill 3</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <div className="flex justify-center mt-4">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-4 text-center">
        <p>&copy; 2024 Lauren Herbert. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
