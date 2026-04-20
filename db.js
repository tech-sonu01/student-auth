const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'database-1.cmhkeecawdqt.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Ca5iTkdeyYJIzjSBSyGl', // apna password likho agar hai
    database: 'student_auth'
});

// Connect to DB
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("MySQL Connected...");
    }
});

module.exports = db;