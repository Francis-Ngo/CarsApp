import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowAllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>All Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.name} - {car.make} {car.model} ({car.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllCars;
