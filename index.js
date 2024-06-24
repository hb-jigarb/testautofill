const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve the apple-app-site-association file
app.get('/apple-app-site-association', (req, res) => {
    const filePath = path.join(__dirname, 'apple-app-site-association');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
