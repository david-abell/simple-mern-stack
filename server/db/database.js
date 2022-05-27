const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../config.env" });
const Db = process.env.ATLAS_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let MongoDb = {
  db: null,
};

client.on("connectionClosed", (ev) =>
  console.log(`MongoDb Connection Id #${ev.connectionId} successfully closed`)
);

async function connect() {
  if (MongoDb.db) return;

  try {
    await client.connect();
    MongoDb.db = client.db(DATABASE_NAME);
    console.log(`connected to database "${DATABASE_NAME}"`);
    return client;
  } catch (err) {
    console.log("Failed to connect to database", err.message);
    close();
  }
}

function getDb() {
  return MongoDb.db;
}

async function close() {
  console.log("shutting down database connection");
  if (MongoDb.db) {
    await client.close();
  }
}

module.exports = { connect, close, getDb, client };
