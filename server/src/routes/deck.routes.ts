import { Router } from "express";
import { deckController } from "../controllers";


const router = Router();

router.post('/', deckController.addOne);

export default router;