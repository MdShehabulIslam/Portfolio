const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data from the frontend

// POST route to handle the form data and send an email
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shehabul97@gmail.com", // Replace with your Gmail address
      pass: "FuriouS_Siam", // Use App Password if 2FA is enabled
    },
  });

  // Mail options
  const mailOptions = {
    from: email, // Sender's email from the form
    to: "shehabul97@gmail.com", // Your receiving email address
    subject: `New message from ${name}`, // Subject of the email
    text: message, // The message from the form
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      return res.status(500).json({ message: "Error sending email" });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Message sent successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
