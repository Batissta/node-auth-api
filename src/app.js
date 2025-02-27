const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pessoaRoute = require("./routes/pessoa");
const app = express();

app.use(express.json());
app.use(pessoaRoute);

mongoose
  .connect(process.env.MONGO_STRING_CONNECTION)
  .then(() => {
    console.log("A api se conectou com o banco de dados!");
    app.emit("ok");
  })
  .catch(() => {
    console.log("A api não conseguiu se conectar com o banco de dados!");
  });

app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log("O servidor está rodando!");
  });
});
