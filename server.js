const express = require('express');

const app = express();

const PORT = 3000;


// Read information submitted from HTML forms
app.use(express.urlencoded({ extended: true }));


// Serve the files inside the public folder
app.use(express.static('public'));


// Reservation form route
app.post('/submit-reservation', (req, res) => {

    // Get the information from the form
    const {
        name,
        email,
        phone,
        date,
        message
    } = req.body;


    // Print the reservation information in the terminal
    console.log({
        name,
        email,
        phone,
        date,
        message
    });


    // Show confirmation in the browser
    res.send(`
        <h1>Reservation Confirmed!</h1>

        <p>Thank you, ${name}.</p>

        <p>
            Your reservation request for
            <strong>${date}</strong>
            has been received.
        </p>

        <a href="/">Return to Home</a>
    `);

});


// Start the server
app.listen(PORT, () => {

    console.log(
        `Bean & Brew server is running on http://localhost:${PORT}`
    );

});