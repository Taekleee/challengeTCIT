const { Sequelize } = require('sequelize');

const database = "postgres";
const username = "";
const password = "";
const host = "";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}