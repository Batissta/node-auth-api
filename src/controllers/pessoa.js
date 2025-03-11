const pessoaModel = require("../models/pessoa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  criarPessoa: async (req, res) => {
    try {
      const { apelido, idade, senha } = req.body;
      const senhaCriptografada = bcrypt.hashSync(
        senha,
        Number(process.env.ROUNDS)
      );
      const pessoa = await pessoaModel.create({
        apelido,
        idade,
        senha: senhaCriptografada,
      });
      if (!pessoa)
        throw new Error(
          `Impossível criar a pessoa. Leia a documentação da API para saber como enviar a requisição corretamente: https://github.com/Batissta/node-auth-api`
        );
      res.status(201).json({
        mensagem: "Pessoa criada com sucesso!",
        pessoa: {
          apelido,
          idade,
          senha: senhaCriptografada,
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
      res.status(500).json({
        mensagem: "Algo deu errado... Faço contato com o suporte!",
      });
    }
  },
  login: async (req, res) => {
    try {
      const { apelido, senha } = req.body;
      const pessoa = await pessoaModel.findOne({ apelido });
      if (!pessoa)
        return res.status(400).json({
          mensagem: "Credenciais Inválidas!",
        });
      const isValid = bcrypt.compareSync(senha, pessoa.senha);
      if (!isValid)
        return res.status(400).json({
          mensagem: "Credenciais Inválidas!",
        });
      const token = jwt.sign({ apelido: apelido }, process.env.SECRET);
      return res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: "Credenciais Inválidas!",
      });
    }
  },
};
