const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "52.253.95.11",
  port: "3306",
  user: "root",
  password: "porjudb",
  database: "db",
});

module.exports = pool;
