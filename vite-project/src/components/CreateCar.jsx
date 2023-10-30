import React, { useState } from 'react';
import axios from 'axios';

const CreateCar = () => {
  const [car, setCar] = useState({ name: '', make: '', model: '', year: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/cars', car);
      alert('Car created successfully');
      setCar({ name: '', make: '', model: '', year: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a New Car</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" value={car.name} onChange={handleInputChange} />
        <input type="text" name="make" placeholder="Make" value={car.make} onChange={handleInputChange} />
        <input type="text" name="model" placeholder="Model" value={car.model} onChange={handleInputChange} />
        <input type="number" name="year" placeholder="Year" value={car.year} onChange={handleInputChange} />
        <button type="submit">Create Car</button>
      </form>
    </div>
  );
};

export default CreateCar;
