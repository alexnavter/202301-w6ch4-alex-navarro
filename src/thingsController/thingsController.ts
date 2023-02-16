import { type Request, type Response } from "express";
import "../data/data.js";
import thingsKnown from "../data/data.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ thingsKnown });
};
