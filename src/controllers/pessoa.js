const pessoaModel = require("../models/pessoa");

module.exports = {
  criarPessoa: async (req, res) => {
    try {
      const { nome, idade, telefone, password, username } = req.body;
      const usuario = await pessoaModel.create({
        nome,
        idade,
        telefone,
        password,
        username,
      });
      if (!usuario) throw new Error("O usuário não foi criado");
      res.status(201).json({
        mensagem: "O usuário foi criado!",
        usuario: {
          username,
          nome,
          idade,
        },
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      });
    }
  },
  listarPessoas: async (req, res) => {
    try {
      const pessoas = await pessoaModel.find();
      res.status(200).json({
        quantidade: pessoas.length,
        pessoas,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      });
    }
  },
};
