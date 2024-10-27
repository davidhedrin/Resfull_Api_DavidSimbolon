const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', userRoutes);

// Middleware penanganan rute yang tidak ditemukan (404)
app.use((req, res, next) => {
  res.status(404).json('API Not Found');
});

// Middleware penanganan kesalahan umum
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});