const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../config.env" });
const Db = process.env.ATLAS_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    const connection = await client.connect();
    return connection.db(DATABASE_NAME);
  } catch (err) {
    console.log("Failed to connect to database", err.message);
    throw new Error(err);
  }
}

function shutdownHandler(signal) {
  console.log(`Caught ${signal}, shutting down database connection`);
  client.close();
  process.exit();
}

module.exports = { connectToDatabase, shutdownHandler };
