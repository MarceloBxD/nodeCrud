// utilizando o Express
const express = require("express");
const app = express();

// Utilizando o handlebars para o uso do HTML
const handlebars = require("express-handlebars");

// BodyParser para pegar os dados do formulário
const bodyParser = require("body-parser");

// Porta de conexão
const port = 3000;

// Importando o POST
const Post = require("./models/Post.js");

// Configurando Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configurando body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Criando rotas
app
  .get("/crud", (req, res) => {
    res.render("formulario");
  })

  .get("/", (req, res) => {
    res.render("home");
  })

  .post("/response", (req, res) => {
    Post.create({
      titulo: req.body.name,
      conteudo: req.body.firstimpression,
    })
      .then(() => {
        res.send("Post criado com sucesso!");
      })
      .catch((err) => {
        res.send("Erro ao criar o post: " + err);
      });
  })

  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
