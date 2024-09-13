const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form route
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received data:", req.body);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: `You have a new message from your portfolio website:

    Name: ${name}
    Email: ${email}
    Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); 
      return res
        .status(500)
        .json({ message: "Something went wrong. Please try again." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
