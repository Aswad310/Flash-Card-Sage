import mongoose, { Schema, Document } from "mongoose";

// Interface for the Deck model
interface Deck extends Document {
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema definition
const deckSchema = new Schema<Deck>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Decks = mongoose.model<Deck>("decks", deckSchema);

export default Decks;