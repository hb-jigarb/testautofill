const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the apple-app-site-association file from the root directory
app.get('/apple-app-site-association', (req, res) => {
    res.sendFile(path.join(__dirname, 'apple-app-site-association'));
});

// Example route for your index file
app.get('/', (req, res) => {
    res.send('Welcome to your Node.js application!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
