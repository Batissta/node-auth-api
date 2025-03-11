const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  apelido: { type: String, required: true, unique: true },
  idade: { type: Number, required: true },
  senha: { type: String, required: true },
});

module.exports = mongoose.model("pessoas", pessoaSchema);
