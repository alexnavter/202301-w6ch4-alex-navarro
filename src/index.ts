import "./loadEnvironment.js";
import express from "express";
import thingsRouter from "./router/router.js";

const app = express();

app.use(express.json());

const port = process.env.PORT ?? 4003;

app.use("/", thingsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Error. Endpoint not found." });
});

app.listen(port);
