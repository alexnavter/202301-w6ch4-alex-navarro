import "./loadEnvironment.js";
import express from "express";
import thingsKnown from "./data/data.js";

const app = express();

app.use(express.json());

const port = process.env.PORT ?? 4001;

const server = app.listen(port);

app.get("/", (req, res) => {
  res.status(200).json({ thingsKnown });
});
