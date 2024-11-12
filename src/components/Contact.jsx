const Contact = () => (
  <section
    id="contact"
    className="p-10 bg-custom-gradient text-white"
  >
    <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded bg-opacity-80 bg-darkBlue-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 rounded bg-opacity-80 bg-darkBlue-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
      <textarea
        placeholder="Your Message"
        rows="5"
        className="p-3 rounded bg-opacity-80 bg-darkBlue-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
      ></textarea>
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-400 text-darkBlue-900 py-2 rounded font-semibold transition duration-200"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
