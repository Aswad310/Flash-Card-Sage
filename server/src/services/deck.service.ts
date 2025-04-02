import { Deck } from '../models';

export const addOne = async (req) => {
  const { title } = req.body;

  const deck = await Deck.create({ title });

  return deck;
};