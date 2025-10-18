const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

// Initialization
const app = express();

// Set PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/me', async (req, res) => {
    let catFact = '';

    try {
        const response = await axios.get('https://catfact.ninja/fact', {
            timeout: 5000
        });
        catFact = response.data.fact;

    } catch (error) {
        console.error('Error fetching cat fact:', error.message);
        catFact = 'Could not retrieve a cat fact at this time.';
    }

    // Get DateTime
    const timestamp = new Date().toISOString();

    // Response Data
    const responseData = {
        status: 'success',
        user: {
            email: process.env.MY_EMAIL,
            name: process.env.MY_NAME,
            stack: process.env.MY_STACK
        },
        timestamp: timestamp,
        fact: catFact
    };

    // Send the JSON Response
    res.json(responseData);
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});