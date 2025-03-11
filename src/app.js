const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const middleware = require("./middleware");
const pessoaRoute = require("./routes/pessoa");
const app = express();

app.use(express.json());
app.use(middleware);
app.use(pessoaRoute);

mongoose
  .connect(process.env.MONGO_STRING_CONNECTION)
  .then(() => {
    console.log("O banco de dados está rodando!");
    app.emit("ok");
  })
  .catch(() => {
    console.log("A api não conseguiu se conectar com o banco de dados!");
  });

app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log(`O servidor está rodando! Na porta ${process.env.PORT}.`);
  });
});
