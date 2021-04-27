const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  port: "3306",
  user: "nuttavadee",
  password: "nuttavadee",
  database: "osdb",
});

module.exports = pool;
