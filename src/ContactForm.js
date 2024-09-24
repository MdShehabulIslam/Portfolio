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
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="container my-5 contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info"></div>
        <div className="contact-form">
          <form className="contact-form-inner" onSubmit={handleSubmit}>
            <h2>Lets Connect</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
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
                className="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit mt-4">
              Send Message
            </button>
            <p className="status-message">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
