// server.js

const express = require('express');
const app = express();
const moralisRoutes = require('./routes/moralis.route');

const Moralis = require("moralis").default;
// Import the EvmChain dataType



require('dotenv').config();

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount userRoutes at the /users endpoint
app.use('/api', moralisRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

const PORT = process.env.PORT || 3000;



// Add this a startServer function that initialises Moralis
const startServer = async () => {
    await Moralis.start({
      apiKey: process.env.MORALIS_WEB_API_KEY,
    });
  
    app.listen(PORT, () => {
        console.log(`Express and Moralis Server is running on port ${PORT}`);
      });
  };
  
  // Call startServer()
  startServer();
