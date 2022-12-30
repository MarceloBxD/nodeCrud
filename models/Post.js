const db = require("./db");

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.Sequelize.STRING,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

// So executar o sync uma vez, depois comentar ou deletar.

module.exports = Post;
