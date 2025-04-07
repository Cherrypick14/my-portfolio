import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaPython, FaRust } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const TechStacks = () => (
  <section id="tech-stacks" className="p-10 bg-custom-gradient text-white">
    <h2 className="text-3xl font-bold text-center mb-6">Tech Stacks</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaReact size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>React</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <SiTailwindcss size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>Tailwind CSS</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaNodeJs size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>Node.js</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaRust size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>Rust</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <SiTypescript size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>TypeScript</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaGithub size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>GitHub</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaGitAlt size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>Git</p>
      </div>
      <div className="tech-stack-item bg-darkBlue-600 p-6 rounded-lg shadow-lg text-center">
        <FaPython size={60} className="mx-auto mb-2 text-lightBlue-400" />
        <p>Python</p>
      </div>
     
    </div>
  </section>
);

export default TechStacks;
