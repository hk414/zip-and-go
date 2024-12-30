const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Allow cross-origin requests from the frontend (React) on port 3000
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only React app on localhost:3000
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  },
});

// Basic GET request at root
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

// POST route to handle form submission
app.post('/sendEmail', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: '',
    to: '',  // Recipient email
    subject: `Contact Form Submission: ${firstName} ${lastName}`,
    text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent:', info);
      return res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
