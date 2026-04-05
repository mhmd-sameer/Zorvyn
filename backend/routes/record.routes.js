import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import authorizeRoles from '../middleware/role.middleware.js';
import { createRecord, getRecord, updateRecord, deleteRecord } from '../controller/record.controller.js';

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    authorizeRoles('admin'),
    createRecord
);

router.get(
    '/',
    authMiddleware,
    authorizeRoles('admin', 'analyst', 'viewer'),
    getRecord
);

router.put(
    '/:id',
    authMiddleware,
    authorizeRoles('admin'),
    updateRecord
);

router.delete(
    '/:id',
    authMiddleware,
    authorizeRoles('admin'),
    deleteRecord
);

export default router;