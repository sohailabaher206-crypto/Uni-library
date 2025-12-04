const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('library.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
        isbn TEXT PRIMARY KEY,
        title TEXT,
        author TEXT,
        quantity INTEGER,
        available INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        type TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS loans (
        loanId TEXT PRIMARY KEY,
        isbn TEXT,
        borrowerId TEXT,
        loanDate TEXT,
        dueDate TEXT,
        returnDate TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS reservations (
        resId TEXT PRIMARY KEY,
        isbn TEXT,
        borrowerId TEXT,
        date TEXT
    )`);
});

module.exports = db;
