require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const request = require("supertest");
const { makeApp, shutdownHandler } = require("../app.js");
const MongoDb = require("../db/database");

describe("routes", () => {
  let connection;
  let db;
  let app;
  let testId;
  const testDoc = {
    name: "Jane Austin",
    position: "author",
    level: "Senior",
  };

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
    await connection.close();
  });

  it("should insert a new record", async () => {
    const res = await request(app).post("/record/add").send(testDoc);
    testId = res.body.insertedId;
    expect(res.status).toEqual(200);
    expect(res.body.acknowledged).toBeTruthy();
    expect(res.body.insertedId).toBeTruthy();
  });

  it("should get the inserted test object", async () => {
    const mockResponse = { ...testDoc };
    mockResponse._id = testId;
    const res = await request(app).get(`/record/${testId}`);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(mockResponse);
    expect(res.body._id).toEqual(testId);
  });

  it("should acknowledge one update", async () => {
    const res = await request(app).post(`/update/${testId}`).send(testDoc);
    expect(res.status).toEqual(200);
    expect(res.body.acknowledged).toBeTruthy();
    expect(res.body.matchedCount).toBe(1);
  });

  it("should get an object with status 200", async () => {
    const res = await request(app).delete(`/${testId}`);
    expect(res.status).toEqual(200);
  });

  it("should get an empty array and status 200", async () => {
    const res = await request(app).get("/record");
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(0);
  });

  it("should respond 404", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(404);
  });
});
