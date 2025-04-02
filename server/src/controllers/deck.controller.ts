import { Request, Response } from "express";
import { deckServices } from "../services";

export const addOne = async (req: Request, res: Response) => {
  try {
    const data = await deckServices.addOne(req);

    console.log(data);

    return res.json({ data });
    // responseHelper.setResponse(res, data);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: "An error occurred while adding the deck." });
    // responseHelper.setResponse(res, { type: "server" });
  }
};