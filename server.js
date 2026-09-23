// Import Express
const express = require('express');

// Create the Express application
const app = express();

// Port used by the server
const PORT = 3000;


// ---------------------------------------
// Middleware
// ---------------------------------------

// Allows Express to read information
// submitted from HTML forms
app.use(express.urlencoded({ extended: true }));


// Serve HTML, CSS, and other static files
// from the public folder
app.use(express.static('public'));


// ---------------------------------------
// Reservation Route
// ---------------------------------------

// This route receives the reservation form
// when the user clicks "Book Table"
app.post('/submit-reservation', (req, res) => {

    // Get the submitted information
    // from the HTML form
    const {
        name,
        email,
        phone,
        date,
        message
    } = req.body;


    // Display the submitted reservation
    // information in the terminal
    console.log('New Reservation:');

    console.log({
        name,
        email,
        phone,
        date,
        message
    });


    // Send a confirmation response
    // back to the browser
    res.send(`
        <!DOCTYPE html>

        <html lang="en">

        <head>
            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >

            <title>Reservation Confirmed | Bean & Brew</title>

            <link rel="stylesheet" href="/CSS/style.css">
        </head>

        <body>

            <header>
                <h1>Bean & Brew</h1>

                <nav>
                    <a href="/">Home</a>
                    <a href="/menu.html">Menu</a>
                    <a href="/contact.html">Contact</a>
                </nav>
            </header>

            <main>

                <section class="contact-section">

                    <h2>Reservation Confirmed!</h2>

                    <p>
                        Thank you, <strong>${name}</strong>.
                    </p>

                    <p>
                        Your reservation request for
                        <strong>${date}</strong>
                        has been received.
                    </p>

                    <p>
                        We will contact you at
                        <strong>${email}</strong>
                        if we need any additional information.
                    </p>

                    <a href="/">Return to Home</a>

                </section>

            </main>

        </body>

        </html>
    `);

});


// ---------------------------------------
// Start Server
// ---------------------------------------

app.listen(PORT, () => {

    console.log(
        `Bean & Brew server is running on http://localhost:${PORT}`
    );

});