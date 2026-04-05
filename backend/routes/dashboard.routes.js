import express from 'express';
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js"
import { getDashboardSummary } from "../controller/dashboard.controller.js";

const router = express.Router();

router.get(
    '/',
    authMiddleware,
    authorizeRoles('admin','analyst','viewer'),
    getDashboardSummary
);

export default router;
