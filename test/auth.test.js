import supertest from "supertest";
import { server } from "../src/application/server.js";
import { logger } from "../src/application/logger.js";
import { createTestUser, removeTestUser } from "../src/utils/test-utils.js";
describe("POST /api/v1/auth/register", () => {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should be can register", async () => {
    const result = await supertest(server).post("/api/v1/auth/register").send({
      fullname: "test",
      email: "test@gmail.com",
      password: "12345678",
      confirm_password: "12345678",
    });
    expect(result.status).toBe(201);
    expect(result.body.message).toBe("Register Successfully");
    expect(result.body.data.fullname).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.password).toBeUndefined();
    expect(result.body.data.confirm_password).toBeUndefined();
  });

  it("should reject if request is invalid", async () => {
    const result = await supertest(server).post("/api/v1/auth/register").send({
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.error_message).toBeDefined();
  });

  it("should reject if email already register", async () => {
    let result = await supertest(server).post("/api/v1/auth/register").send({
      fullname: "test",
      email: "test@gmail.com",
      password: "12345678",
      confirm_password: "12345678",
    });
    result = await supertest(server).post("/api/v1/auth/register").send({
      fullname: "test",
      email: "test@gmail.com",
      password: "12345678",
      confirm_password: "12345678",
    });
    logger.info(result.body);
    expect(result.status).toBe(409);
    expect(result.body.error_message).toBeDefined();
  });
});

describe("POST /api/v1/auth/login", () => {
  beforeEach(async () => {
    await createTestUser();
  });
  afterEach(async () => {
    await removeTestUser();
  });
  it("should be can login", async () => {
    const result = await supertest(server).post("/api/v1/auth/login").send({
      email: "test@gmail.com",
      password: "12345678",
    });
    expect(result.body.message).toBe("Login Successfully");
    expect(result.status).toBe(200);
    expect(result.body.access_token).toBeDefined();
    expect(result.body.access_token).not.toBe("test");
  });

  it("should reject if request is invalid", async () => {
    const result = await supertest(server).post("/api/v1/auth/login").send({
      email: "",
      password: "",
    });
    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.error_message).toBeDefined();
  });
});
