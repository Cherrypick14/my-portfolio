import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs
      .send(
        "service_lwcbfhp", // Service ID from EmailJS
        "template_tezjptb", // Template ID from EmailJS
        formData, // The data to send (name, email, message)
        "REvrjaz9bj-OKoANu" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          }); // Reset form fields
        },
        (error) => {
          console.error("Email sending failed", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-custom-gradient text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-opacity-80 bg-darkBlue-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-opacity-80 bg-darkBlue-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
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
};

export default Contact;
