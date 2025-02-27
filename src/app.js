const express = require("express");
const mongoose = require("mongoose");
const usuarioRoute = require("./routes/pessoa");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(usuarioRoute);

mongoose.connect(process.env.MONGO_URL_CONNECTION).then(() => {
  console.log("O banco de dados foi conectado!");
  app.emit("ok");
});

app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log("O servidor está rodando!");
  });
});
