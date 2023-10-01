require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config');
const connectToMongoDB = require('./db/mongoConnect');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use('/api', apiRoutes);

app.get("/", (req, res) => {
  res.json({
      message: "Hello World"
  });
});

// Custom Error Handling Middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
connectToMongoDB();

module.exports = app;
