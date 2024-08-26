import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.HOST_PORT || 4000;

app.get("/", (req, res) => {
  res.json("Hello World - 1!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
