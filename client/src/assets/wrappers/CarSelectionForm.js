import styled from "styled-components";

const Wrapper = styled.section`
form {
  background-color: var(--background-secondary-color);
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
          span{
            color: var(--primary-500);
        }
}

div {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 8px;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

select:focus {
  border-color: #007BFF;
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

select:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

button:disabled {
  background-color: #c6c6c6;
  cursor: not-allowed;
}
`;

export default Wrapper;

