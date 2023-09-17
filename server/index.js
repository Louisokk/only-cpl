const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000; // Wählen Sie einen Port Ihrer Wahl
const fs = require('fs');
const data = require("./data")

// Middleware zur Verarbeitung von JSON-Anfragen
app.use(express.json());

// CORS aktivieren
app.use(cors());

// Simuliert eine Datenbank mit Benutzerinformationen
const loginCredentials = {
  username: 'test',
  password: 'test',
};


// Route für den Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
console.log(username, password)
  // Überprüfen Sie die Anmeldeinformationen
  if (username === loginCredentials.username && password === loginCredentials.password) {
    res.json(JSON.stringify(data));
    console.log(data)
  } else {
    res.status(401).json({ message: 'Login fehlgeschlagen' });
  }
});

// Starten Sie den Express-Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});