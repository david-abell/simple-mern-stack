require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const { connectToDatabase, shutdownHandler } = require("./db/database.js");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const server = connectToDatabase()
  .then((database) => {
    routes(app, database).listen(port, () =>
      console.log(`Server is running on port ${port}`)
    );
  })
  .catch((err) => console.log(err));

process.on("SIGINT", shutdownHandler);
process.on("SIGTERM", shutdownHandler);
