import "./loadEnvironment.js";
import express from "express";
import chalk from "chalk";

const app = express();

app.use(express.json());

const port = process.env.PORT ?? 4001;

const server = app.listen(port);

app.get("/");
