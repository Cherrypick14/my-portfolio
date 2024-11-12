const Projects = () => (
  <section id="projects" className="p-10 bg-custom-gradient text-white">
    <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-darkBlue-600 p-6 rounded-lg shadow-lg">
        <img
          src="/skillshub.webp"
          alt="Project One"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Skills_Hub: Collaborative Learning Platform</h3>
        <p>
          Skills_Hub is a decentralized backend platform built on the Internet Computer Protocol (ICP), designed to manage users, their skills, and learning resources. The project is implemented as a Rust-based canister smart contract, which enables users to manage profiles, share resources, and find learning matches, all via the command-line interface (CLI) using DFX.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="https://github.com/Cherrypick14/skills_hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-darkBlue-600 p-6 rounded-lg shadow-lg">
        <img
          src="/learn-about-rights-donate.png"
          alt="Project Two"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">
          Kintsugi: Blockchain-Based Support Platform for GBV Survivors
        </h3>
        <p>
          Kintsugi is a blockchain-powered platform designed to support Gender-Based Violence (GBV) survivors by ensuring privacy, security, and empowerment. The platform allows anonymous reporting, facilitates financial support through donations, enables peer-to-peer connections, and provides access to educational and medical resources.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="https://github.com/Cherrypick14/kintsugi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://hxclu-4qaaa-aaaal-ajxkq-cai.icp0.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-darkBlue-600 p-6 rounded-lg shadow-lg">
        <img
          src="/react shop cat.png"
          alt="Project Three"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">React ShopCart: Beginner-Friendly Shopping Cart</h3>
        <p>
          React ShopCart is a simple e-commerce cart built with React that allows users to add and remove books from their cart. It demonstrates the use of React's ContextAPI for state management, featuring a clean UI and easy cart interactions.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="https://github.com/Cherrypick14/react-shopcart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://react-shopcarttt.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
