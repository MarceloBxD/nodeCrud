const Sequelize = require("sequelize");

// Fazendo integração com o banco de dados.

const sequelize = new Sequelize("firstimpressions", "root", "Br@cet051528", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
