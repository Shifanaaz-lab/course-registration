const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the course registration page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'course.html'));
});

// Handle form submission
app.post('/register-course', (req, res) => {
  const { studentName, email, course } = req.body;
  console.log(`New Registration: ${studentName} | ${email} | ${course}`);

  res.send(`
    <h2>Registration Successful</h2>
    <p>Thank you, ${studentName}!</p>
    <p>You have registered for <strong>${course.replace(/_/g, ' ')}</strong>.</p>
    <a href="/">Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
