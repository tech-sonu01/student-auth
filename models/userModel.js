const db = require('../db');

// Insert User
exports.createUser = (name, email, password, callback) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], callback);
};

// Find User
exports.findUser = (email, password, callback) => {
    const sql = "SELECT * FROM users WHERE email=? AND password=?";
    db.query(sql, [email, password], callback);
};