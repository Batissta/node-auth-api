require("dotenv").config();
const jwt = require("jsonwebtoken");

const privateRoute = {
  url: "http://localhost:3000/pessoas",
  method: "PUT",
};

module.exports = async (req, res, next) => {
  try {
    console.log("Middleware rodando...");

    const isPrivate =
      privateRoute.url == req.originalUrl && privateRoute.method == req.method;
    if (!isPrivate) return next();

    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer "))
      return res.status(401).json({
        mensagem: "Você não está autorizado a passar deste ponto!",
      });
    const token = authorization.split(" ")[1];
    const result = jwt.verify(token, process.env.SECRET);
    if (!result)
      return res.status(401).json({
        mensagem: "Você não está autorizado a passar deste ponto!",
      });

    return next();
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message,
    });
  }
};
