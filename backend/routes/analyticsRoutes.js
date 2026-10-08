import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";
import {getAdminStats} from "../controller/analyticsController.js"

const analyticsRouter = Router();

analyticsRouter.get('/', protect, admin, getAdminStats);

export default analyticsRouter;