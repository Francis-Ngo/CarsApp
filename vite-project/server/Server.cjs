
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost/carsDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

const Car = require('./Cars.cjs');


app.post('/cars', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new car' });
  }
});


app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve cars' });
  }
});


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost/carsDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

const Car = require('./Cars.cjs');


app.post('/cars', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new car' });
  }
});


app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve cars' });
  }
});


app.get('/cars/:carName', async (req, res) => {
  const carName = req.params.carName;
  try {
    const car = await Car.findOne({ name: carName });
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: 'Car not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve car' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
