import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSingleCar = () => {
  const { carName } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`/cars/${carName}`);
        setCar(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCar();
  }, [carName]);

  return (
    <div>
      <h2>Single Car</h2>
      {car ? (
        <div>
          <p>Name: {car.name}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSingleCar;
