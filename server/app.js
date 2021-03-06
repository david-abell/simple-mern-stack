const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const MongoDb = require("./db/database.js");
const { MongoClient } = require("mongodb");

let connection;
let app;

async function makeApp() {
  app = express();
  app.use(cors());
  app.use(express.json());
  app.use(routes());
  return app;
}

async function shutdownHandler(signal) {
  console.log(`Received ${signal}, shutting down database connection...`);
  if (MongoDb.getDb()) {
    await MongoDb.close();
  }
  process.exit();
}

process.on("SIGINT", shutdownHandler);
process.on("SIGTERM", shutdownHandler);

module.exports = { app, makeApp, shutdownHandler };
