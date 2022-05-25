require("dotenv").config({ path: "./config.env" });
// const express = require("express");
// const cors = require("cors");
// const routes = require("./routes/routes.js");
// const { connectToDatabase, shutdownHandler } = require("./db/database.js");
const port = process.env.PORT || 5000;
const { app } = require("./app.js");

// const app = express();
// app.use(cors());
// app.use(express.json());

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

// process.on("SIGINT", shutdownHandler);
// process.on("SIGTERM", shutdownHandler);
