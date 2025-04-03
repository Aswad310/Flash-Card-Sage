import { Request, Response } from "express";
import { deckServices } from "../services";

export const addOne = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await deckServices.addOne(req);
    console.log(data);
    return res.status(201).json({ data });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An error occurred while adding the deck." });
  }
};
