// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Port
const PORT = 3001;

// A route handler for the root URL ('/'). Responds to incoming GET requests with a JSON object containing a welcome message.
app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: "Welcome To Node Server"
    });
})

// Starts the Node.js server and listens on the specified port.
app.listen(PORT, () => {
    console.log(`Node Server Started On Port ${PORT}`)
});