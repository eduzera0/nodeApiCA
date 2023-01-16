import express from "express";
import { JogoView } from "../db/views/jogosView.js";

const router = express.Router();

router.get(`/jogos`, JogoView);

export default router;