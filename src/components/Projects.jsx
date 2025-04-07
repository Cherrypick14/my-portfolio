const Projects = () => (
  <section id="projects" className="p-10 bg-custom-gradient text-white">
    <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-darkBlue-600 p-6 rounded-lg shadow-lg">
        <img
          src="/Coinwryt.png"
          alt="Project One"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">CoinWryt: Own Your Words, Write the Future</h3>
        <p>
        CoinWryt is a decentralized marketplace that empowers ghostwriters with fair pay and verified ownership through blockchain. It connects clients to top-tier writers for authentic storytelling, without middlemen. We’re redefining ghostwriting—secure, transparent, and writer-first.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="https://github.com/Cherrypick14/CoinWryt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://coinwryt-vh7q.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-darkBlue-600 p-6 rounded-lg shadow-lg">
        <img
          src="/surveai.png"
          alt="Project Two"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">
         SurveAI: AI-Powered Surveillance with Blockchain-Backed Integrity
        </h3>
        <p>
        SurveAI is a next-gen surveillance system that uses real-time AI threat detection and blockchain for secure, tamper-proof data logging. Built with a mission to transform global security infrastructure, it empowers cities, enterprises, and institutions with smarter, trust-first monitoring.
        </p>
        <div className="mt-4 flex gap-4">
          {/* <a
            href="https://github.com/Kintaraa/kintaraa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue-400 hover:underline"
          >
            GitHub
          </a> */}
          <a
            href="https://surve.onrender.com/"
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
