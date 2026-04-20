const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve views folder
app.use(express.static(path.join(__dirname, 'views')));

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}));

// Default route
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

// Use routes
app.use('/', authRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});