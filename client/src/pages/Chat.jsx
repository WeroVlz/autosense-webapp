import { CarSelectionForm, ChatForm } from '../components';
import { useState, useEffect } from 'react';

const Chat = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isChatStarted, setIsChatStarted] = useState(false);

  useEffect(() => {
    const savedCar = localStorage.getItem('selectedCar');
    if (savedCar) {
      setSelectedCar(JSON.parse(savedCar)); // Parse the stored car data
      setIsChatStarted(true); // If there's a selected car, start the chat
    }
  }, []);

  const handleStartChat = (car) => {
    setSelectedCar(car);
    setIsChatStarted(true);
    localStorage.setItem('selectedCar', JSON.stringify(car));
  };

  return (
    <div className="chat-container">
      {!isChatStarted ? (
        <CarSelectionForm onStartChat={handleStartChat} />
      ) : (
        <ChatForm
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          setIsChatStarted={setIsChatStarted}
        />
      )}
    </div>
  );
};

export default Chat;
