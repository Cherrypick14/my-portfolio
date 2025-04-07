const About = () => (
  <section
    id="about"
    className="p-10 bg-custom-gradient text-white"
  >
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Description on the left */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
          Hi, I'm Cheryl! I am a passionate developer focused on creating engaging web experiences with modern technologies.
          I enjoy building projects that are both user-friendly and visually appealing. My goal is to bring ideas to life through code, 
          continuously pushing the boundaries of what's possible in the digital space.
        </p>
      </div>

      {/* Picture on the right */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/cheryl.jpeg" 
          alt="Cheryl's Profile" 
          className="w-72 h-72 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;
