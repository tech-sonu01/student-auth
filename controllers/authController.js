const userModel = require('../models/userModel');
const path = require('path');

// Signup
exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    userModel.createUser(name, email, password, (err, result) => {
        if (err) {
            return res.send("User already exists or error occurred");
        }
        res.redirect('/login.html');
    });
};

// Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    userModel.findUser(email, password, (err, result) => {
        if (err) {
            return res.send("Database error");
        }

        if (result.length > 0) {
            req.session.user = result[0];
            res.redirect('/dashboard');
        } else {
            res.send(`
                <h3 style="color:red;">Invalid Email or Password</h3>
                <a href="/login.html">Try Again</a>
            `);
        }
    });
};

// Dashboard
exports.dashboard = (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../views/dashboard.html'));
    } else {
        res.redirect('/login.html');
    }
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login.html');
    });
};