const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Application works!');
});

// connection
app.listen(3000, () => console.log(`Listening to port ${3000}`));