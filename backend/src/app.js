const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pixelRoutes = require('../routes/pixelRoutes');
const leadRoutes = require('../routes/leadRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/identity_pixel_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api/pixel', pixelRoutes);
app.use('/api/leads', leadRoutes);

module.exports = app;