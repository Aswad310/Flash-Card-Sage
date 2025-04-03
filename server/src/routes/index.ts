import { Router } from "express";
import deckRoutes from "./deck.routes";

const router = Router();

router.use("/deck", deckRoutes);

export default router;
