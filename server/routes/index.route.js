import express from "express";

import authRoutes from "./auth.route.js";
import { errorHandler, notFoundHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use(notFoundHandler);
router.use(errorHandler);

export default router;
