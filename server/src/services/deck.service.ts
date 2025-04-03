import { Request } from 'express';
import { Deck } from '../models';

export const addOne = async (req: Request) => {
  const { title } = req.body;

  const deck = await Deck.create({ title });

  return deck;
};