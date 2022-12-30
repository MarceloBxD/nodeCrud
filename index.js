const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const port = 3000;

// Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configurando body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectando com o banco de dados.
const sequelize = new Sequelize("projetodecadastro", "root", "Br@cet051528", {
  host: "localhost",
  dialect: "mysql",
});

// Criando rotas
app
  .get("/crud", (req, res) => {
    res.render("formulario");
  })

  .post("/response", (req, res) => {
    res.send(
      "Nome: " +
        req.body.name +
        " Primeira Impressão: " +
        req.body.firstImpression
    );
  })

  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
