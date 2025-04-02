import express, { Router } from "express";
import deckRoutes from "./deck.routes";

const router: Router = express.Router();

router.use("/deck", deckRoutes);

export default router;
