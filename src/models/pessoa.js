const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  telefone: { type: String, required: true },
});

module.exports = mongoose.model("pessoas", pessoaSchema);
