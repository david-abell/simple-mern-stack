const request = require("supertest");
const server = require("../server.js");

describe("routes", () => {
  test("should log server is running", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
  });
});
