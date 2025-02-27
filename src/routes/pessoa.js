const router = require("express").Router();
const { listaPessoas, cadastraPessoa } = require("../controllers/pessoa");

router.route("/").get(listaPessoas).post(cadastraPessoa);

module.exports = router;
