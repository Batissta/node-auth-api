const router = require("express").Router();
const { criarPessoa, listarPessoas } = require("../controllers/pessoa");

router.route("/").get(listarPessoas).post(criarPessoa);

module.exports = router;
