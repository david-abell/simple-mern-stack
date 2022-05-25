const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const MongoDb = require("./db/database.js");

const app = express();
app.use(cors());
app.use(express.json());

let connection;
MongoDb.connect()
  .then((ev) => (connection = ev))
  .then(() => app.use(routes(MongoDb.getDb())))
  .then(() => console.log(connection.close));
// const connection = async () =>
//   MongoDb.connect().then(() => app.use(routes(MongoDb.getDb())));
// connection().then((ev) => console.log(Object.keys(ev)));
process.on("SIGINT", MongoDb.close);
process.on("SIGTERM", MongoDb.close);

module.exports = { app, connection };
