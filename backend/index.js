const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost', // Change this if your MySQL is hosted elsewhere
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'chatbot_db', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create the Messages table if it doesn't exist
db.query(
  `CREATE TABLE IF NOT EXISTS Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    sender VARCHAR(10) NOT NULL, -- 'user' or 'bot'
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Messages table ensured');
    }
  }
);

// Create the Responses table if it doesn't exist
db.query(
  `CREATE TABLE IF NOT EXISTS Responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_message TEXT NOT NULL,
    bot_response TEXT NOT NULL
  )`,
  (err) => {
    if (err) {
      console.error('Error creating Responses table:', err);
    } else {
      console.log('Responses table ensured');
    }
  }
);

// Sample predefined responses (for testing purposes)
db.query(
  `INSERT INTO Responses (user_message, bot_response) VALUES
    ('hi', 'Hello! How can I assist you today?'),
    ('bye', 'Goodbye! Have a great day!')`,
  (err, result) => {
    if (err) console.log('Error inserting sample responses:', err);
    else console.log('Sample responses inserted');
  }
);

// API Endpoints
// 1. Save a message
app.post('/send-message', (req, res) => {
  const { message, sender } = req.body;

  console.log('User message received:', message); // Log the incoming user message

  // Save the user's message to the Messages table
  const query = 'INSERT INTO Messages (message, sender) VALUES (?, ?)';
  db.query(query, [message, sender], (err, result) => {
    if (err) {
      console.error('Error saving message:', err);
      res.status(500).send('Error saving message');
    } else {
      console.log('Message saved successfully'); // Log after saving the message

      // After saving the user message, find an appropriate bot response
      const responseQuery = 'SELECT * FROM Responses WHERE user_message LIKE ? LIMIT 1';
      db.query(responseQuery, [message], (err, response) => {
        if (err) {
          console.error('Error fetching bot response:', err);
          res.status(500).send('Error fetching bot response');
        } else {
          console.log('Bot response from DB:', response); // Log the response from DB

          let botResponse = 'I didn\'t understand that. Can you rephrase?';

          if (response.length > 0) {
            botResponse = response[0].bot_response;
          }

          console.log('Sending bot response:', botResponse); // Log the response being sent to frontend

          // Save the bot's response to the database
          db.query('INSERT INTO Messages (message, sender) VALUES (?, ?)', [botResponse, 'bot'], (err) => {
            if (err) {
              console.error('Error saving bot response:', err);
            }

            res.json({
              user_message: message,
              bot_response: botResponse,
              sender: 'bot',
              timestamp: new Date().toISOString(),
            });
          });
        }
      });
    }
  });
});

// 2. Get all messages
app.get('/get-messages', (req, res) => {
  const query = 'SELECT * FROM Messages ORDER BY timestamp ASC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      res.status(500).send('Error fetching messages');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
