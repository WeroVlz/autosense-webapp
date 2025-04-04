import Wrapper from '../assets/wrappers/ChatForm';
import { MdEdit } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatForm = ({ selectedCar, setSelectedCar, setIsChatStarted }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    const savedInput = localStorage.getItem('chatInput');

    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedInput) setUserInput(savedInput);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (userInput.trim() !== '') {
      localStorage.setItem('chatInput', userInput);
    }
  }, [userInput]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/ask', {
        prompt: userInput,
        car: selectedCar, // Send selected car details to backend
      });

      const aiMessage = {
        text: response.data.reply,
        sender: 'ai',
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error communicating with API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error fetching response. Try again.', sender: 'ai' },
      ]);
    } finally {
      setLoading(false);
      localStorage.removeItem('chatInput');
    }
  };

  const handleClearCarSelection = () => {
    localStorage.removeItem('selectedCar');
    setSelectedCar(null);
    setIsChatStarted(false);
    setMessages([]);
    setUserInput('');
    localStorage.removeItem('chatMessages');
    localStorage.removeItem('chatInput');
  };

  return (
    <Wrapper>
      <div className="chat-container">
        <div className="chat-header">
          <h2>
            {selectedCar.make} <span>{selectedCar.model}</span>{' '}
            {selectedCar.year}
          </h2>
          <button
            type="button"
            className="edit-car"
            onClick={handleClearCarSelection}
          >
            <MdEdit />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === 'ai' ? 'from-ai' : 'from-user'
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && (
            <div className="message from-ai">
              <p>Thinking...</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="chat-input-container">
          <textarea
            className="chat-input"
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="send-button btn"
            disabled={loading || !userInput.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ChatForm;
