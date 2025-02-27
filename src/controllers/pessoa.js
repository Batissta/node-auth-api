const pessoaModel = require("../models/pessoa");

module.exports = {
  cadastraPessoa: async (req, res) => {
    try {
      const { nome, idade, telefone } = req.body;
      const novaPessoa = await pessoaModel.create({
        nome,
        idade,
        telefone,
      });
      if (!novaPessoa) throw new Error("O usuário não pode ser criado");
      res.status(201).json({
        mensagem: "O usuário foi cadastrado com sucesso!",
        usuario: {
          nome,
          idade,
          telefone,
        },
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      });
    }
  },
  listaPessoas: async (req, res) => {
    try {
      const pessoas = await pessoaModel.find();
      res.status(200).json({
        quantidade: pessoas.length,
        pessoas: pessoas,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      });
    }
  },
};
