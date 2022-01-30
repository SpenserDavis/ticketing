import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 given an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 given an invalid pw", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "p",
    })
    .expect(400);
});

it("returns a 400 given missing email and/or pw", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ email: "", password: "123456" })
    .expect(400);

  await request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const res = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(res.get("Set-Cookie")).toBeDefined();
});
