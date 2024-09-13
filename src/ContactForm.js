import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    axios
      .post("http://localhost:5000/send", formData)
      .then((response) => {
        setStatus(response.data.message);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error); // Log error
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="container my-5 contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="lead text-center">
        Feel free to reach out for any inquiries, opportunities, or
        collaborations.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control form-control-lg"
            id="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-custom mt-4">
          Send Message
        </button>
        <p>{status}</p>
      </form>
    </section>
  );
}

export default ContactForm;
