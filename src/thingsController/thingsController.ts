import { type Request, type Response } from "express";
import thingsKnown from "../data/thingsKnown.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ thingsKnown });
};

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingById = thingsKnown.find((thing) => thing.id === +id);

  res.status(200).json({ thingById });
};
