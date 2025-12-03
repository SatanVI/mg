const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Pour servir les fichiers statiques (front-end)

// Route simple pour tester
app.get('/', (req, res) => {
  res.send('Bienvenue sur MG Événementiels !');
});

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
