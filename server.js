const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Initialization
const app = express();

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
            email: "olaoluwadaniel99@gmail.com",
            name: "Olaoluwa Daniel Odewale",
            stack: "Node.js/Express | Postgres"
        },
        timestamp: timestamp,
        fact: catFact
    };

    // Send the JSON Response
    res.json(responseData);
});

// Start the Server
const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});