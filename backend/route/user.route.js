import { Router } from "express";
import { signup } from "../controller/user.controller.js";

const router = Router();

// Route for user signup
router.post("/signup", signup);

export default router;
