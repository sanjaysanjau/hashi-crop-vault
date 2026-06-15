import express from "express";
import { getAll } from "../controllers/user.controller";

const router = express.Router();

router.get("/get-all", getAll);

export default router;
