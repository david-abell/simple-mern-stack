require("dotenv").config({ path: "./config.env" });
const MongoDb = require("./db/database");
// const express = require("express");
// const cors = require("cors");
// const routes = require("./routes/routes.js");
// const { connectToDatabase, shutdownHandler } = require("./db/database.js");
const port = process.env.PORT || 5000;
const { makeApp } = require("./app.js");

const app = makeApp()
  .then(MongoDb.connect())
  .then((ev) =>
    ev.listen(port, () => console.log(`Server is running on port ${port}`))
  );
// const server = app.listen(port, () =>
//   console.log(`Server is running on port ${port}`)
// );
