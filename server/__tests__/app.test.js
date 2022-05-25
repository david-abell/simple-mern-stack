require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const request = require("supertest");
const mongoApp = require("../app.js");

describe("Sample Test", () => {
  let connection;
  let db;

  beforeAll(async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation();
    // const mockConsole = jest.spyOn(console, "log").mockImplementation();
    connection = await MongoClient.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await mongoApp.MongoDb.close();
    console.log("mongodb closed");
    await connection.close();
  });

  it("should get an object with statusCode 200", async () => {
    const res = await request(mongoApp.app).get("/record");
    expect(res.statusCode).toEqual(200);
  });
});
