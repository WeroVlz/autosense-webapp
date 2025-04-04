import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CarSelectionForm';

// CarSelectionForm Component
const CarSelectionForm = ({ onStartChat }) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [yearsList] = useState(
    Array.from({ length: 16 }, (_, index) => 2025 - index)
  );

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await axios.get('api/v1/cars');
        setMakes(response.data);
      } catch (error) {
        console.error('Error fetching makes', error);
      }
    };

    fetchMakes();
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedMake) {
        try {
          const response = await axios.get(`/api/v1/cars/${selectedMake}`);
          setModels(response.data);
          setSelectedModel('');
          setSelectedYear([]);
          setSelectedYear('');
        } catch (error) {
          console.log('Error fetching models', error);
        }
      }
    };

    fetchModels();
  }, [selectedMake]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMake && selectedModel && selectedYear) {
      const selectedCar = {
        make: selectedMake,
        model: selectedModel,
        year: selectedYear,
      };

      onStartChat(selectedCar);
    } else {
      alert('Please select Make, Model, and Year');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>
          What <span>car</span> do you drive?
        </h1>
        <div>
          <label htmlFor="make">Make:</label>
          <select
            id="make"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select Make</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="model">Model:</label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedMake}
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disabled={!selectedModel}
          >
            <option value="">Select Year</option>
            {yearsList.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" type="submit" disabled={!selectedYear}>
          Start Chat
        </button>
      </form>
    </Wrapper>
  );
};

export default CarSelectionForm;
