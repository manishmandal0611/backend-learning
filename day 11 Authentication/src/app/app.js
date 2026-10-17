import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    {
      email,
      name,
    },
    "ced2cd22f32c1281d1e7fea9cd5ed5d6",
  );

  res.status(201).json({
    message: "message created successfully",
    data:{
        email, name
    },
    token
  });
});

export default app;
