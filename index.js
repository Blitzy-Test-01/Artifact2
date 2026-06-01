// index.js
// Entry point for the Artifact2 Node.js HTTP server.
// Express.js is introduced here per the feature request; it serves two GET endpoints.

const express = require('express');

// Create the Express application instance that registers and dispatches routes.
const app = express();

// Use the port supplied by the environment, defaulting to 3000 for local runs.
const PORT = process.env.PORT || 3000;

// Baseline endpoint: preserves the original tutorial behavior by returning "Hello world".
app.get('/', (req, res) => {
  res.send('Hello world');
});

// New endpoint added per the feature request: returns "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Bind the server so it begins accepting HTTP connections.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
