const { Sequelize } = require('sequelize');

const database = "postgres";
const username = "postgres";
const password = "mysecretpassword";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}