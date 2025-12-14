const express = require('express');
const cors = require('cors');

const authRoutes = require('./modules/auth/auth.routes');
const sweetRoutes = require('./modules/sweets/sweets.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);

app.get('/', (req, res) => {
  res.send('Sweet Shop Backend is running');
})

module.exports = app;