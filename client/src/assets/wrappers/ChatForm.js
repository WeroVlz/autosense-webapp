import styled from "styled-components";

const Wrapper = styled.section`
/* Chat Container */
.chat-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  background-color: var(--background-secondary-color);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  height: 78vh;
  padding: 20px;
  overflow: hidden;
}

/* Chat Header */
.chat-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  text-align: center;
  margin-bottom: 20px;
}

.chat-header h2 {
  font-size: 1.6rem;
  color: var(--text-color);
  margin: 0;
  span{
    color: var(--racing-red)
  }
}
.edit-car{
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    color: var(--primary-500);
    cursor: pointer;
    margin-left: 10px;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 20px;
  color: var(--grey-900);
}

.message {
  max-width: 80%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1rem;
  word-wrap: break-word;
}

.from-ai {
  background-color: var(--grey-300);
  text-align: left;
  margin-left: 0;
  align-self: flex-start;
  padding: 12px 16px; /* More comfortable padding */
  border-radius: 12px; /* Softer corners */
  font-size: 1rem;
  line-height: 1.5; /* Better readability */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 75%; /* Prevents overly wide messages */
  word-wrap: break-word;
}


.from-user {
  background-color: var(--primary-500);
  color: white;
  text-align: right;
  margin-left: auto;
  margin-right: 0;
  align-self: flex-end;
}


.chat-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.chat-input {
  width: 80%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  resize: none;
  height: 40px;
}

.chat-input:focus {
  border-color: var(--racing-red);
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.send-button {
  width: 15%;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.send-button:disabled {
  background-color: #c6c6c6;
  cursor: not-allowed;
}

.chat-messages::-webkit-scrollbar {
  width: 4px;
  
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--primary-500);
  border-radius: 10px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}


`;

export default Wrapper;