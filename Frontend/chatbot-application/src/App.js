import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatWindowRef = useRef(null); // Reference to the chat window

  // Fetch messages from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/get-messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage) return;

    const newMessage = {
      message: inputMessage,
      sender: 'user',
    };

    try {
      // Send message to backend
      const response = await axios.post('http://localhost:5000/send-message', newMessage);
      // Append the user's message and bot's reply to the messages array
      setMessages([...messages, { message: inputMessage, sender: 'user' }, { message: response.data.bot_response, sender: 'bot' }]);
      setInputMessage('');  // Clear input field after sending the message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Send message when "Enter" is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="container my-3">
      <div className="card shadow-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="card-header bg-primary text-white" style={{ fontSize: '16px', padding: '8px' }}>
          <h5 className="text-center mb-0">Chatbot Application</h5>
        </div>
        <div className="card-body p-2">
          <div
            className="chat-window mb-3"
            style={{ height: '250px', overflowY: 'scroll', padding: '5px' }}
            ref={chatWindowRef} // Attach the ref here
          >
            {messages.map((msg, index) => (
              <div key={index} className={`mb-1 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                <p
                  className={`d-inline-block px-2 py-1 rounded ${
                    msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                  }`}
                  style={{
                    fontSize: '14px', // Reduced font size
                    maxWidth: '150px', // Adjust width for better fit
                    padding: '5px',
                    wordWrap: 'break-word',
                  }}
                >
                  <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.message}
                </p>
              </div>
            ))}
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for "Enter" key press
              placeholder="Type your message..."
              style={{ fontSize: '14px', height: '35px' }} // Reduced font size and height
            />
            <button className="btn btn-primary btn-sm" onClick={sendMessage} style={{ height: '35px' }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
