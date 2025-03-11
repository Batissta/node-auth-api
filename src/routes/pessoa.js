const Router = require("express").Router();
const { criarPessoa, listarPessoas, login } = require("../controllers/pessoa");

Router.route("/pessoas")
  .get(listarPessoas)
  .post(criarPessoa)
  .put(async (req, res) => {
    res.status(200).json({ apelido: req.pessoaApelido });
    console.log("Modifiquei o usuário!");
  });

Router.route("/pessoas/login").post(login);

module.exports = Router;
