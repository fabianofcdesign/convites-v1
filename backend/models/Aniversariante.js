const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AniversarianteSchema = new Schema({
  nome: { type: String, required: true },
  data: { type: String, required: true },
  dia: { type: String, required: true },
  idade: { type: Number, required: true },
  endereco: { type: String, required: true }
});

module.exports = mongoose.model('Aniversariante', AniversarianteSchema);
