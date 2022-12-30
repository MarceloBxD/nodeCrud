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

  .get("/", (req, res) => {
    Post.findAll()
      .then((posts) => {
        res.render("home", { posts: posts });
      })
      .catch((err) => {
        res.send("Erro ao listar os posts: " + err);
      });
  })

  .get("/crud", (req, res) => {
    res.render("formulario");
  })

  .post("/response", (req, res) => {
    Post.create({
      titulo: req.body.name,
      conteudo: req.body.firstimpression,
    })
      .then(() => {
        // Irá redirecionar para a página inicial com as primeiras impressões
        res.redirect("/");
      })
      .catch((err) => {
        res.send("Erro ao criar o post: " + err);
      });
  })

  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
