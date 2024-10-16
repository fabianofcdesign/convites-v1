const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let aniversariantes = [];

app.get('/api/aniversariantes', (req, res) => {
  res.json(aniversariantes);
});

app.post('/api/aniversariantes', (req, res) => {
  const novoAniversariante = { id: Date.now(), ...req.body };
  aniversariantes.push(novoAniversariante);
  res.status(201).json(novoAniversariante);
});

app.delete('/api/aniversariantes/:id', (req, res) => {
  aniversariantes = aniversariantes.filter(aniversariante => aniversariante.id !== parseInt(req.params.id));
  res.status(204).end();
});

app.put('/api/aniversariantes/:id', (req, res) => {
  aniversariantes = aniversariantes.map(aniversariante => 
    aniversariante.id === parseInt(req.params.id) ? { ...aniversariante, ...req.body } : aniversariante
  );
  res.json(aniversariantes.find(aniversariante => aniversariante.id === parseInt(req.params.id)));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
