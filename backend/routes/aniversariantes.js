const express = require('express');
const router = express.Router();
const Aniversariante = require('../models/Aniversariante');

// Get all aniversariantes
router.get('/', (req, res) => {
  Aniversariante.find()
    .then(aniversariantes => res.json(aniversariantes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new aniversariante
router.post('/', (req, res) => {
  const newAniversariante = new Aniversariante(req.body);
  newAniversariante.save()
    .then(() => res.json('Aniversariante added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an aniversariante by ID
router.delete('/:id', (req, res) => {
  Aniversariante.findByIdAndDelete(req.params.id)
    .then(() => res.json('Aniversariante deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Edit an aniversariante by ID
router.put('/:id', (req, res) => {
  Aniversariante.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json('Aniversariante updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
