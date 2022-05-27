require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const request = require("supertest");
const { makeApp, shutdownHandler } = require("../app.js");
const MongoDb = require("../db/database");
const router = require("../routes/routes");

describe("Sample Test", () => {
  let connection;
  let db;
  let app;

  beforeAll(async () => {
    app = await makeApp();
    const mockExit = jest.spyOn(process, "exit").mockImplementation();
    // const mockConsole = jest.spyOn(console, "log").mockImplementation();
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(process.env.MongoDb);
    const mockDb = jest.spyOn(MongoDb, "getDb").mockReturnValue(db);
  });

  afterAll(async () => {
    // await shutdownHandler();
    console.log("mongodb closed");
    // await connection.close();
  });

  it("should get an object with statusCode 200", async () => {
    // console.log(db);
    const res = await request(app).post("/record/add");
    // console.log(Object.keys(res));
    // console.log(res.error);
    expect(res.statusCode).toEqual(200);
  });
});
