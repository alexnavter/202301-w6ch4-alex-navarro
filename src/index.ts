import "./loadEnvironment.js";
import express from "express";
import thingsRouter from "./routes/router.js";

const app = express();

app.use(express.json());

const port = process.env.PORT ?? 4001;

const server = app.listen(port);

app.get("/things", thingsRouter);
